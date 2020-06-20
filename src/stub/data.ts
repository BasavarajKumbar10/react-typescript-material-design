interface IReview {
    reviewer: string;
    feedback: string;
    rating: number;
}

export interface ICourse {
    title: string;
    createdAt?: string;
    imageUrl: string;
    rating: number;
    description: string;
    price?: string;
    review: {
        total: number,
        reviews: IReview[];
    }
}

export const intro = {
    imageUrl: 'https://images.unsplash.com/photo-1588615419966-0c0f3bb797b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
    info: 'Sed ut perspiciatis unde omnis iste natus error sitperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
}

export const courses: ICourse[] = [
    {
        title: 'Neque porro quisquamt',
        createdAt: 'September 14, 2016',
        imageUrl: 'https://images.unsplash.com/photo-1592652739390-0887bc73e5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        rating: 4.2,
        price: '1200.00',
        description: 'quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 120,
            reviews: [
                {
                    reviewer: 'Jack Reacher',
                    feedback: 'to odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
    {
        title: 'Qui dolorem ipsum ',
        imageUrl: 'https://images.unsplash.com/photo-1592466741597-abfb88a71618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2470&q=80',
        createdAt: 'June 12, 2017',
        rating: 4,
        price: '1000.00',
        description: 'facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 1240,
            reviews: [
                {
                    reviewer: 'John Snow',
                    feedback: 'qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
    {
        title: 'Temporibus autem',
        imageUrl: 'https://images.unsplash.com/photo-1587613863152-ecc4f2ea3dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        createdAt: 'May 23, 2020',
        rating: 3.4,
        price: '1500.00',
        description: 'e placeat facere possimnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 140,
            reviews: [
                {
                    reviewer: 'Arya Stark',
                    feedback: 'to odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
    {
        title: 'luptas assu rerum ',
        imageUrl: 'https://images.unsplash.com/photo-1592588253418-446d263e74c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        rating: 2,
        createdAt: 'July 20, 2019',
        price: '2000.00',
        description: 'quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 10,
            reviews: [
                {
                    reviewer: 'Andy Dmelo',
                    feedback: 'to odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
    {
        title: 'Neque porro quisquamt',
        createdAt: 'September 14, 2016',
        imageUrl: 'https://images.unsplash.com/photo-1592652739390-0887bc73e5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
        rating: 4.2,
        price: '1200.00',
        description: 'quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 120,
            reviews: [
                {
                    reviewer: 'Jack Reacher',
                    feedback: 'to odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
    {
        title: 'Qui dolorem ipsum ',
        imageUrl: 'https://images.unsplash.com/photo-1592466741597-abfb88a71618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2470&q=80',
        createdAt: 'June 12, 2017',
        rating: 4,
        price: '1000.00',
        description: 'facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 1240,
            reviews: [
                {
                    reviewer: 'John Snow',
                    feedback: 'qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
    {
        title: 'Temporibus autem',
        imageUrl: 'https://images.unsplash.com/photo-1587613863152-ecc4f2ea3dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        createdAt: 'May 23, 2020',
        rating: 3.4,
        price: '1500.00',
        description: 'e placeat facere possimnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 140,
            reviews: [
                {
                    reviewer: 'Arya Stark',
                    feedback: 'to odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
    {
        title: 'Et harum quidem rerum ',
        imageUrl: 'https://images.unsplash.com/photo-1592588253418-446d263e74c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        rating: 5,
        createdAt: 'May 23, 2020',
        price: '1500.00',
        description: 'quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe ev',
        review: {
            total: 120,
            reviews: [
                {
                    reviewer: 'User 1',
                    feedback: 'to odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident dolorum fuga. Et harum quidem rerum facilis est et ',
                    rating: 4.5,
                }
            ]
        }
    },
];
