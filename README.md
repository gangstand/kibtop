# Launching API

```
cd services/backend
docker compose up --build
```

**Api links:** 

Swagger - http://127.0.0.1:8000/api/v1/docs/ 

![img.png](readme_img/img.png)

Redoc - http://127.0.0.1:8000/api/v1/docs/redoc/

![img_1.png](readme_img/img_1.png)

**Admin link** \
Django Admin - http://127.0.0.1:8000/admin/
![img_2.png](readme_img/img_2.png)

**Creating Admin user**
```
docker ps
```
```
# Сonclusion ...
<id container react>    frontend-react  "docker-entrypoint.s…"   1 minutes ago   Up 1 minutes   0.0.0.0:3000->3000/tcp   react
<id container postgres> postgres        "docker-entrypoint.s…"   1 minutes ago   Up 1 minutes   0.0.0.0:5432->5432/tcp   backend-postgresql-1
<id container api>      backend-api     "sh -c ' python mana…"   1 minutes ago   Up 1 minutes   0.0.0.0:8000->8000/tcp   api
```
```
docker exec -ti <id container api> python manage.py createsuperuser
```
```
# Сonclusion ...
Username: admin # The input is displayed (user by default 'admin')
Email: admin@admin.com # The input is displayed (email by default 'admin@admin.com')
Password: # The input is not displayed (default password is '1234')
Password (again): # The input is not displayed (default password is '1234')
This password is too short. It must contain at least 8 characters.
This password is too common.
This password is entirely numeric.
Bypass password validation and create user anyway? [y/N]: y # <- Important 
Superuser created successfully.

```

# Launching React

```
cd services/frontend
docker compose up --build
```

**React link** - http://127.0.0.1:3000/