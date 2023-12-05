import React from 'react';
import user from "../data/user";

const Links = () => {
    return (
        <div>
            <h3>Links</h3>
            <a href={user && user.links && user.links.github}>{user && user.links && user.links.github}</a>
            <a href={user && user.links && user.links.linkedin}>{user && user.links && user.links.linkedin}</a>
        </div>
    );
}

export default Links;