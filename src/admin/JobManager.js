"use client";
import { useState, useEffect } from 'react';
import { fetchAllJobs, deleteResource, REMOTE_BASE_URL } from '../lib/api';

const JobManager = () => {
    const [jobs, setJobs] = useState([]);
    const [editingJob, setEditingJob] = useState(null);
    const [emails, setEmails] = useState(['']);
    const [toast, setToast] = useState(null);

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 3000);
    };

    const [canEdit, setCanEdit] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('adminUser');
        if (storedUser) {
            try {
                const user = JSON.parse(storedUser);
                setCanEdit(user.is_superadmin || user.permissions?.includes('jobs_edit'));
            } catch (e) {
                setCanEdit(false);
            }
        }
    }, []);

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        if (editingJob) {
            setEmails(editingJob.emails ? editingJob.emails.split(',').map(e => e.trim()) : ['']);
        } else {
            setEmails(['']);
        }
    }, [editingJob]);

    const fetchJobs = () => {
        fetchAllJobs()
            .then(data => setJobs(data))
            .catch(err => console.error(err));
    };

    const handleSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        // Clean and join emails
        data.emails = emails.filter(email => email.trim() !== '').join(',');

        // Automatically set status_color based on status
        if (data.status === 'Active') {
            data.status_color = '#10b981'; // Green
        } else {
            data.status_color = '#ef4444'; // Red (Disabled/In Progress)
        }

        const url = editingJob?.id ? `${REMOTE_BASE_URL}/job-openings/${editingJob.id}/` : `${REMOTE_BASE_URL}/job-openings/`;
        const method = editingJob?.id ? 'PATCH' : 'POST';

        fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(async res => {
                if (res.ok) {
                    fetchJobs();
                    setEditingJob(null);
                    showToast(`Job ${editingJob?.id ? 'updated' : 'created'} successfully!`);
                } else {
                    const errText = await res.text();
                    try {
                        const errData = JSON.parse(errText);
                        showToast('Error: ' + (errData.detail || 'Failed to save'), 'error');
                    } catch (e) {
                        showToast('Error: ' + errText, 'error');
                    }
                }
            })
            .catch(err => {
                console.error(err);
                showToast('Network error', 'error');
            });
    };

    const addEmailField = () => setEmails([...emails, '']);
    const removeEmailField = (index) => setEmails(emails.filter((_, i) => i !== index));
    const handleEmailChange = (index, value) => {
        const newEmails = [...emails];
        newEmails[index] = value;
        setEmails(newEmails);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this job opening?')) return;
        try {
            const res = await deleteResource('job-openings', id);
            if (res) {
                fetchJobs();
                showToast('Job deleted successfully!');
            } else {
                showToast('Failed to delete job', 'error');
            }
        } catch (err) {
            console.error(err);
            showToast('Error deleting job', 'error');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
            {/* Custom Toast Notification */}
            {toast && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    backgroundColor: toast.type === 'error' ? '#ff4d4f' : '#10b981',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 10000,
                    animation: 'slideIn 0.3s ease-out',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: '500'
                }}>
                    {toast.type === 'error' ? '✕' : '✓'} {toast.message}
                    <style>{`
                        @keyframes slideIn {
                            from { transform: translateX(100%); opacity: 0; }
                            to { transform: translateX(0); opacity: 1; }
                        }
                    `}</style>
                </div>
            )}

            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ margin: 0 }}>Job Openings</h4>
                {canEdit && !editingJob && (
                    <button
                        onClick={() => setEditingJob({ title: '', description: '', location: 'Vadodara', job_type: 'Full Time', qualification: '', status: 'Active', status_color: '#10b981', emails: '' })}
                        className="admin-login-btn" style={{ width: 'auto', padding: '8px 20px' }}
                    >
                        + Add New Job
                    </button>
                )}
            </div>

            {editingJob && (
                <div className="admin-modal-overlay">
                    <div className="admin-modal-wrapper">
                        <div className="admin-modal-header">
                            <h4>{editingJob.id ? 'Edit Job' : 'New Job'}</h4>
                            <button className="admin-modal-close" onClick={() => setEditingJob(null)}>×</button>
                        </div>
                        <form key={editingJob.id || 'new'} onSubmit={handleSave}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                <div className="admin-form-group">
                                    <label>Job Title</label>
                                    <input name="title" defaultValue={editingJob.title} required style={{ width: '100%' }} />
                                </div>
                                <div className="admin-form-group">
                                    <label>Location</label>
                                    <select name="location" defaultValue={editingJob.location} required style={{ width: '100%', padding: '8px' }}>
                                        <option value="Vadodara">Vadodara</option>
                                    </select>
                                </div>
                            </div>
                            <div className="admin-form-group" style={{ marginTop: '10px' }}>
                                <label>Job Type</label>
                                <select name="job_type" defaultValue={editingJob.job_type} style={{ width: '100%', padding: '8px' }}>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>

                            <div className="admin-form-group" style={{ marginTop: '10px' }}>
                                <label>Contact Emails</label>
                                {emails.map((email, index) => (
                                    <div key={index} style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => handleEmailChange(index, e.target.value)}
                                            placeholder="email@example.com"
                                            style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                                        />
                                        {emails.length > 1 && (
                                            <button type="button" onClick={() => removeEmailField(index)} style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '0 10px', borderRadius: '4px', cursor: 'pointer' }}>✕</button>
                                        )}
                                    </div>
                                ))}
                                <button type="button" onClick={addEmailField} style={{ background: '#0e224e', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '4px', fontSize: '12px', marginTop: '5px', cursor: 'pointer' }}>+ Add More Email</button>
                            </div>

                            <div className="admin-form-group" style={{ marginTop: '10px' }}>
                                <label>Status Label</label>
                                <select name="status" defaultValue={editingJob.status} required style={{ width: '100%', padding: '8px' }}>
                                    <option value="Active">Active</option>
                                    <option value="In Progress">Disabled</option>
                                </select>
                            </div>
                            <div className="admin-form-group" style={{ marginTop: '10px' }}>
                                <label>Qualification (Limit: 40)</label>
                                <input name="qualification" defaultValue={editingJob.qualification} maxLength={40} style={{ width: '100%' }} />
                            </div>
                            <div className="admin-form-group" style={{ marginTop: '10px' }}>
                                <label>Description (Limit: 150)</label>
                                <textarea name="description" defaultValue={editingJob.description} required maxLength={150} style={{ width: '100%', minHeight: '100px', padding: '10px' }} />
                            </div>
                            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                <button type="submit" className="admin-login-btn" style={{ width: 'auto', padding: '10px 30px' }}>Save Job</button>
                                <button type="button" onClick={() => setEditingJob(null)} style={{ background: '#eee', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="admin-card" style={{ background: 'white', padding: '20px', borderRadius: '8px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
                            <th style={{ padding: '10px' }}>Title</th>
                            <th style={{ padding: '10px' }}>Description</th>
                            <th style={{ padding: '10px' }}>Location</th>
                            <th style={{ padding: '10px' }}>Type</th>
                            <th style={{ padding: '10px' }}>Status Label</th>
                            {canEdit && <th style={{ padding: '10px' }}>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job => (
                            <tr key={job.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                                <td style={{ padding: '10px' }}>{job.title}</td>
                                <td style={{ padding: '10px', fontSize: '12px', color: '#666' }}>
                                    {job.description ? (job.description.length > 50 ? job.description.substring(0, 50) + '...' : job.description) : 'N/A'}
                                </td>
                                <td style={{ padding: '10px' }}>{job.location}</td>
                                <td style={{ padding: '10px' }}>{job.job_type}</td>
                                <td style={{ padding: '10px' }}>
                                    <span style={{ color: job.status_color }}>{job.status === 'In Progress' ? 'Disabled' : job.status}</span>
                                </td>
                                {canEdit && (
                                    <td style={{ padding: '10px' }}>
                                        <button onClick={() => setEditingJob(job)} style={{ background: '#0e224e', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', marginRight: '5px', cursor: 'pointer' }}>Edit</button>
                                        <button onClick={() => handleDelete(job.id)} style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer' }}>Delete</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobManager;
