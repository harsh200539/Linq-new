import React from "react";
import { MapPin, Clock4, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";

// Individual Card Component
const ProjectCard = ({ data, isOpen, onToggle }) => {
  return (
    <div 
      className={`card-container ${isOpen ? "open" : ""}`} 
      onClick={onToggle}
      style={{ 
        cursor: 'pointer', 
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '440px',
        justifyContent: 'space-between'
      }}
    >
      <div className="card-header">
        <div className="title-pill">
          <span>{data.title}</span>
        </div>
      </div>

      <div className="card-content flex-grow-1">
        <div className="detail-label">Description</div>
        <div className="detail-text" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', wordBreak: 'break-word', maxHeight: isOpen ? 'none' : '80px', overflow: 'hidden' }}>
          {data.description ? (data.description.length > 100 && !isOpen ? data.description.substring(0, 100) + '...' : data.description) : "No description provided."}
        </div>

        {isOpen && (
          <div className="mt-3 animate-fade-in">
            {data.qualification && (
              <>
                <div className="detail-label">Qualification</div>
                <div className="detail-text mb-2">
                  {data.qualification}
                </div>
              </>
            )}

            <div className="d-flex flex-column gap-2">
              {data.location && (
                <div className="detail-text d-flex align-items-center">
                  <MapPin size={16} className="me-2 text-primary" />
                  {data.location}
                </div>
              )}
              {data.jobType && (
                <div className="detail-text d-flex align-items-center">
                  <Clock4 size={16} className="me-2 text-primary" />
                  {data.jobType}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="card-footer d-flex align-items-center justify-content-between pt-3 mt-auto border-top">
        <div className="avatar-group d-flex align-items-center">
          {(data.avatars || []).slice(0, 3).map((avatar, idx) => (
            <img key={idx} className="avatar shadow-sm border border-white" src={avatar} alt="User" style={{ width: '24px', height: '24px', borderRadius: '50%', marginLeft: idx === 0 ? '0' : '-8px' }} />
          ))}
        </div>
        
        <Link 
          href={`/careers/${data.id}`}
          onClick={(e) => e.stopPropagation()}
          className="btn btn-sm btn-linq-primary py-2 px-4 rounded-pill d-flex align-items-center gap-1 fw-bold"
          style={{ fontSize: '13px', backgroundColor: '#007bff' }}
        >
          View Full Details <ExternalLink size={14} />
        </Link>
      </div>
    </div>

  );
};

export default ProjectCard;
