import React from 'react';

interface BookmarkProps {
  link: string;
  label: string;
  description?: string;
}

export const Bookmark: React.FC<BookmarkProps> = ({ link, label, description }) => {
  return (
    <div style={{
      border: "1px solid #f0f0f0",
      padding: "1em",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9"
    }}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{
        textDecoration: "none",
      }}>
        <strong>{label}</strong>
      </a>
      {
        description && (
          <p style={{
            margin: "0.5em 0 0",
          }}>{description}</p>)
      }
    </div>
  );
};