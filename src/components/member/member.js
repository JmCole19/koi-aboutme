import React from 'react'
import { Avatar } from '@material-ui/core';
import '@material-ui/icons';

function MemberCard() {
    return (
        <div className="team-card">
            <div class="avatar mx-auto">
                <Avatar src='/broken-avatar.jpg' style={{ width: '100px', height: '100px'}}></Avatar>
            </div>
            <div style={{ marginBottom: '100px' }}>
                <h5>Teammate</h5>
                <p><strong>Position</strong></p>
            </div>
        </div>
    )
}

export default MemberCard;