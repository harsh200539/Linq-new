from django.urls import path
from . import views

urlpatterns = [
    path('addemailtraffic',views.add_email_traffic),

]