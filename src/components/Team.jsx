import React from "react";

const Team = props => {
    return (
        <div>
            {props.member.map(member => (
                <div key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
}

export default Team;