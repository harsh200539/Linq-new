from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
import json
from django.core.mail import send_mail
from .models import emailTraffic

# Create your views here.
#------------------- Api For Add Theme General Settings  -------------------#
@api_view(['POST'])
def add_email_traffic(request):
    response = request.data
    check_db = emailTraffic()

    if 'name' in request.POST:
        check_db.name = response['name']

    if 'email' in request.POST:
        check_db.email = response['email']

    if 'subject' in request.POST:
        check_db.subject = response['subject']

    if 'message' in request.POST:
        check_db.message = response['message']

    check_db.created_by = "Admin"
    check_db.updated_by = "Admin"
    email_hostUser= "int.web@iq-hub.com"
    email_hostPassword= "cvmtkzzgalgjrxjz"
    subject = "New Website Enquiry"
    message=""
    html_message = f"""
<h2>📩 New Website Enquiry</h2>
<p><b>Name:</b> {response.get('name','')}</p>
<p><b>Email:</b> {response.get('email','')}</p>
<p><b>Subject:</b> {response.get('subject','')}</p>
<p><b>Message:</b><br>{response.get('message','')}</p>
"""
    res = send_mail(subject, message,
                            email_hostUser,["hello@linq-corporate.com"],auth_user=email_hostUser,auth_password=email_hostPassword,html_message=html_message,fail_silently=False)
    if (res == 1):
        check_db.save()
        return JsonResponse({'status': True, "message": "Record Updated Successfully"})
    else:
        return JsonResponse({'status': False, "message": "Error in Email Sending"})