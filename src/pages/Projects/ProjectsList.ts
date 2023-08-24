import blogImg from '@assets/img/projects/blog.png
import chessImg from '@assets/img/projects/chess.png';

import pathfinderImg from '@assets/img/projects/pathfinder.png';
import jgDiffImg from '@assets/img/projects/jg_diff.png';
import portfolioImg from '@assets/img/projects/portfolio.png';
import nycDataImg from '@assets/img/projects/nyc_data_image.png';

const ProjectList = 
[
    {
        "title": "Chess",
        "image": chessImg,
        "description": [
            "Developed a real-time multiplayer chess game web application leveraging websockets.",
            "Implemented sessions to temporarily create a profile through local storage for anonymous users, to grant persistent access to live games and to ensure only valid players can participate",
            "Utilized user authentication and sessions to validate player moves and allow users to save game history",
            "Used Amazon s3 to host static files and user generated content"
        ],
        "tech": [
            "python",
            "django",
            "redis",
            "aws",
            "postgresql",
            "docker"
        ],
        "github": [
            {
                "url": "https://github.com/galaddirie/chess"
            }
        ],
        "demo": [
            {
                "url": "https://chess-stream.herokuapp.com/"
            }
        ]
    },
    {
        "title": "Blog",
        "image": blogImg,
        "description": [
            "Created a blog to specifically discuss Non-Photorealistic Rendering in the Blender 3D space.",
            "Leveraged Strapi as a headless CMS running on Heroku, delivering content to frontend via an API.",
            "Hosted media content using AWS S3, distributing media files to AWS Cloudfront for fast content delivery."
        ],
        "tech": [
            "node",
            "react",
            "aws",
            "postgresql",
            "graphql"
        ],
        "github": [
            {
                "url": "https://github.com/galaddirie/blog-frontend",
                "name": "Frontend"
            },
            {
                "url": "https://github.com/galaddirie/blog-backend",
                "name": "Backend"
            }
        ],
        "demo": [
            {
                "url": "https://blog.galad.ca/"
            }
        ]
    },
    {
        "title": "Pathfinder Vizualizer",
        "image": pathfinderImg,
        "description": [
            "Created an interactive application that allows users to visualize Pathfinding algorithms, generate mazes, and draw obstacles",
            "The pathfinding algorithms are hosted server-side, the client can make requests using ajax for the shortest path and the board is converted into a graph",
            "Implemented pathfinding algorithms such as A Star, Dijkstra, and Greedy Best First Search",
            "Pathfinding algorithms utilize a min-heap to handle the priority queue",
            "Implemented the Recursive Division maze generation algorithm"
        ],
        "tech": [
            "python",
            "django",
            "ajax"
        ],
        "github": [
            {
                "url": "https://github.com/galaddirie/pathfinder_app"
            }
        ],
        "demo": [
            {
                "url": "https://algodraw.herokuapp.com/"
            }
        ]
    },
    {
        "title": "Riot Games Application",
        "image": jgDiffImg,
        "description": [
            "Developed a League of Legends player search engine, using Riot Games External API",
            "Leveraged caches using Redis for recently accessed data from the API for reduced calls to the API and faster response times.",
            "Used ajax to lazily load slower API queries such as match histories after main page content is loaded.",
            "Lazily load match content, resulting in a 10x speed increase in API response"
        ],
        "tech": [
            "python",
            "django",
            "redis",
            "ajax"
        ],
        "github": [
            {
                "url": "https://github.com/galaddirie/jg_diff"
            }
        ],
        "demo": [
            {
                "url": "https://jg-diff.herokuapp.com/"
            }
        ]
    },
    {
        "title": "NYC Arrest Data Analysis",
        "image": nycDataImg,
        "description": [
            "Parsed and graphed New York's historic arrest dataset from 2006-2019, utilizing python.",
            "Analyzed data to identify biases and why minorities are disproportionately arrested more. Looking Specifically at the NYPDs controversial Stop and Frisk policy"
        ],
        "tech": [
            "python"
        ],
        "github": [
            {
                "url": "https://github.com/galaddirie/nyc_arrest_data"
            }
        ],
        "demo": []
    },
    {
        "title": "This Website",
        "image": portfolioImg,
        "description": [
            "You are here!",
            "Created to showcase my personal projects."
        ],
        "tech": [
            "node",
            "react",
            "typescript"
        ],
        "github": [
            {
                "url": "https://github.com/galaddirie/galaddirie.github.io"
            }
        ],
        "demo": []
    }
]

export default ProjectList;
