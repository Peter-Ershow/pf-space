// RepositoryViewer.jsx
import React, { useState, useEffect } from "react";

const RepositoryViewer = ({ username, repoName }) => {
    const [content, setContent] = useState([]);
    const [expandedPaths, setExpandedPaths] = useState({});

    // Fetch repository contents at the root level
    useEffect(() => {
        fetchContents("");
    }, [username, repoName]);

    // Fetch contents of a folder or root
    const fetchContents = async (path) => {
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}/contents/${path}`);
        const data = await response.json();

        setContent(prevContent => {
            // If fetching the root, return the data as is
            if (path === "") {
                return data;
            }
            // Otherwise, recursively add the children to the correct folder
            return addChildren(prevContent, path, data);
        });
    };

    // Recursive function to add children to the correct folder
    const addChildren = (items, path, children) => {
        return items.map(item => {
            if (item.path === path) {
                return { ...item, children }; // Add children to the folder
            } else if (item.type === "dir" && item.children) {
                // Recurse into folders that already have children
                return { ...item, children: addChildren(item.children, path, children) };
            }
            return item;
        });
    };

    // Toggle folder expansion
    const toggleFolder = (path) => {
        setExpandedPaths(prev => ({
            ...prev,
            [path]: !prev[path]
        }));
        if (!expandedPaths[path]) {
            fetchContents(path);
        }
    };

    // Render items recursively
    const renderItems = (items) => {
        return (
            <ul style={{ listStyleType: "none" }}>
                {items.map(item => (
                    <li key={item.sha} style={{ paddingLeft: "20px" }}>
                        {item.type === "dir" ? (
                            <>
                                <span
                                    onClick={() => toggleFolder(item.path)}
                                    style={{
                                        display: "inline-block",
                                        color: "#007acc",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                        backgroundColor: "#f0f0f0",
                                        cursor: "default", // Default cursor to avoid pointer
                                        transition: "background-color 0.3s"
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = "#e0e0e0"}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                                >
                                    📁 {item.name}
                                </span>
                                {expandedPaths[item.path] && item.children && renderItems(item.children)}
                            </>
                        ) : (
                            <a
                                href={item.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    color: "#007acc",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    backgroundColor: "#f0f0f0",
                                    textDecoration: "none",
                                    cursor: "default", // Default cursor to avoid pointer
                                    transition: "background-color 0.3s"
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = "#e0e0e0"}
                                onMouseLeave={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                            >
                                📄 {item.name}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <section className="text-3xl sm:text-2xl text-black">
            <h3 className="text-5xl sm:text-4xl text-black mt-4">Repository Content</h3>
            {renderItems(content)}
        </section>
    );
};

export default RepositoryViewer;
