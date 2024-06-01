# Django API Boilerplate

![Django API Boilerplate](https://i.imgur.com/Wm5PSyr.png)


## Overview

Welcome to the Django API Boilerplate!

Our boilerplate is designed to help you quickly start a Django project with a strong foundation. It's built for scalability, optimized for performance, and follows best practices. Key features include:

-   **Scalable Structure**: Easily expand your project as it grows.
-   **Optimized Performance**: Ensure efficient and responsive applications.
-   **Best Practices**: Follow Django and Python coding standards.
-   **Customizable**: Tailor the boilerplate to your project's needs.

The Django API Boilerplate lets you focus on building your application's unique features without worrying about the fundamentals. It's an excellent starting point for your Django web projects. Happy coding!

## Getting Started

Follow these steps to quickly set up the boilerplate in your development environment:

### Initial Setup

1.  **Clone the Repository**
    
    `git clone https://github.com/estebanhirzfeld/Django-API-Boilerplate.git`
    
2.  **Set Up the Environment**
    
    -   Create a virtual environment (optional but recommended).
    -   Install project dependencies.

### Docker (for Mac and Linux Users)

Docker is used to containerize your application for easy development and deployment. You can use the following commands in the terminal using **make**.

1.  Build and start the project:
    
    `make build`
    
2.  Apply database migrations:
    
    `make migrate`
    
3.  Start the project without rebuilding images:
    
    `make up`
    

### Docker (for Windows Users)

For Windows users, manually execute the following commands in the command prompt or terminal:

1.  Build and start the project:
    
    `docker compose -f local.yml up --build -d --remove-orphans`
    
2.  Apply database migrations:
    
    `docker compose -f local.yml run --rm django python manage.py migrate`
    
3.  Start the project without rebuilding images:
    
    `docker compose -f local.yml up -d`
    


### Customization

We've designed this boilerplate to be highly customizable to suit your specific project needs. Here's how you can tailor it to your project:

1.  **Change the Project Name:** You can easily replace the default project name "Core" with your own project name. We recommend using a code editor extension like [TODO Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) or a find-and-replace tool to ensure you catch all instances of "core" in the codebase. Make sure to update the following:
    
    -   Directory name.
    -   References in `manage.py` and project settings.
    -   Any references in your code or configuration files.
2.  **Customize Configuration:** Review and update any configuration files such as settings, database configurations, and environment variables to match your project requirements. You can also add or modify any additional configurations based on your needs.


## Documentation

Access detailed documentation for your project, including information on using the API, available endpoints, authentication, and other relevant details:

-   [API Documentation [ http://localhost:8080/redoc ]](http://localhost:8080/redoc)

![API Documentation](https://i.imgur.com/jYLG2Tz.png)

Please note that the provided link is for local development. If you're hosting the documentation online, you should replace the URL with the public URL where your documentation is accessible for users. This allows your users to access the API documentation and get the information they need to work with your project.

Additionally, you can see and test the endpoints using the [Postman workspace](https://www.postman.com/lively-station-868994/workspace/core-api/collection/20023698-09c483ba-77b5-45fd-851d-45631c9fb6be?action=share&creator=20023698&active-environment=20023698-225863e9-d46d-418a-8d20-2516ed03157f). Postman simplifies API testing, making it easier for developers to interact with your project's endpoints.


![Postman Endopoints](https://i.imgur.com/zzdegkv.png)


## Mailhog

MailHog simplifies email testing in this boilerplate. With MailHog, you can:

-   **Test Emails Locally:** Send and receive emails within your local environment without delivering them to real recipients.
    
-   **Inspect Sent Emails:** View email content to ensure it matches your expectations.
    
-   **Prevent Real Email Sends:** Avoid accidentally sending test emails to real recipients during development.
    
    ![Mailhog](https://i.imgur.com/R8ORsBy.png)

To get started:

-   **Access MailHog Interface:** Visit [http://localhost:8025](http://localhost:8025/) in your web browser to review sent emails, their content, and email-related details.

Integrating MailHog into your local development environment ensures accurate testing of email functionality in your application.


## Celery and Redis

Celery, a distributed task queue, combined with Redis, a versatile in-memory data store, enhances the capabilities of this boilerplate by enabling asynchronous task processing and efficient caching.

**Integration Overview:**

-   **Celery**: Celery is integrated to handle asynchronous tasks, such as sending emails, that don't need to be executed immediately. These tasks are offloaded to a background worker, which allows your application to remain responsive and efficient.
    
-   **Redis**: Redis serves as the message broker for Celery, facilitating communication between your application and the background worker. Additionally, Redis is used for caching, providing a fast and reliable data store for frequently accessed data.
## Flower

Access Flower at `localhost:5555` using credentials from the `.env` file. Flower is a tool for monitoring and managing Celery tasks. It helps developers keep an eye on task progress and performance.

## PostgreSQL

PostgreSQL serves as the project's database. Configure it for development using the provided settings. It handles data storage and retrieval, ensuring seamless interaction with your Django application.

## Nginx

Nginx acts as the front-end server, serving your Django application. Set it up to enhance performance and security. Detailed instructions are provided to help you configure Nginx effectively.


## Development Tools (For Mac and Linux Users)

These commands are helpful for development and code formatting:

-   `make collectstatic`: Collect static files.
-   `make superuser`: Create a superuser for the Django application.
-   `make down-v`: Stop and remove containers and volumes.
-   `make volume`: Inspect a specific Docker volume (`src_local_postgres_data`  in this case).
-   `make flake8`: Run the Flake8 linter on your code.
-   `make black-check`: Check code style using Black (Python code formatter).
-   `make black-diff`: Display code changes that would be made by Black.
-   `make black`: Apply Black to format your code.
-   `make isort-check`: Check code organization using isort (Python import sorter).
-   `make isort-diff`: Display import changes that would be made by isort.
-   `make isort`: Organize imports using isort.


## License

This Django API Boilerplate is released under the [MIT License](https://www.mit.edu/~amini/LICENSE.md). You are free to use, modify, and distribute it for your projects.

## Contributions

We welcome contributions from the developer community to enhance and improve this boilerplate. To contribute, follow these guidelines:

1.  Fork the repository.
2.  Create a feature branch for your work.
3.  Commit your changes with clear and concise messages.
4.  Push your branch to your fork.
5.  Submit a pull request with a detailed description of your contribution.

We appreciate your contributions in making this boilerplate better for everyone.

## Credits

We would like to acknowledge and express our gratitude to the following third-party libraries, tools, and resources that have been instrumental in the creation of this boilerplate:

-   [Django](https://www.djangoproject.com/): The high-level Python web framework that powers this project.
-   [Celery](https://docs.celeryproject.org/en/stable/): The distributed task queue used for asynchronous task processing.
-   [Redis](https://redis.io/): The in-memory data store that serves as both a message broker and caching mechanism.
-   [Nginx](https://www.nginx.com/): The robust front-end server that enhances performance and security.
-   [MailHog](https://github.com/mailhog/MailHog): The email testing tool for local development.
-  [Flower](https://flower.readthedocs.io/en/latest/): A monitoring and management tool for Celery tasks.
-   [Docker](https://www.docker.com/): The containerization platform used for managing project dependencies and deployment.
- [Postman](https://www.postman.com/): The popular API development tool that simplifies API testing and documentation.

## Contact

If you have any questions, suggestions, or need assistance with this boilerplate, please don't hesitate to get in touch. You can reach us via email at [estebanhirzfeld@gmail.com](mailto:estebanhirzfeld@gmail.com) or visit our [GitHub profile](https://github.com/estebanhirzfeld) for more information and updates.

----------

This combined README provides a comprehensive guide for understanding, setting up, and customizing your Django API Boilerplate. It includes licensing information, contribution guidelines, acknowledgments, and contact details for other developers.
