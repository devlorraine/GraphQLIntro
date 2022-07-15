import React from 'react';
import Link from './Link';

const LinkList = () => {
    const linksToRender = [
        {
            id: 'link-id-1',
            description:
            'Prisma gives you a powerful database toolkit 😎',
            url: 'https://prisma.io'
        },
        {
            id: 'link-id-2',
            description: 'The best GraphQL client',
            url: 'https://www.apollographql.com/docs/react/'
        },
        {
            id: 'link-id-2',
            description: 'This data is hard coded! No database access has been implemented yet!',
            url: ''
        }
    ];
    
    return (
        <div>
            {linksToRender.map((link) => (
                <Link key={link.id} link={link} />
            ))}
        </div>
    );
};

export default LinkList;