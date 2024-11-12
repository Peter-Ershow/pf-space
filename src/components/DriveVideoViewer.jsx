import React from 'react';

const DriveVideoViewer = ({ fileId }) => {
    const videoUrl = `https://drive.google.com/file/d/${fileId}/preview`;

    return (
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
                src={videoUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Google Drive Video"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }}
            />
        </div>
    );
};

export default DriveVideoViewer;
