from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username=None, email=None, password=None, **extra_fields):
        if not username:
            if not email:
                raise ValueError('The given email/username must be set')

        if email:
            email = self.normalize_email(email)

            if not username:
                username = email

            user = self.model(
                email=email,
                username=username,
                **extra_fields
            )

        if extra_fields.get('is_superuser'):
            user = self.model(
                email=email,
                username=username,
                **extra_fields
            )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username=username, email=email, password=password, **extra_fields)

    def create_user_activate(self, username, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_active', True)
        return self._create_user(username=username, email=email, password=password, **extra_fields)

    def create_superuser(self, username, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(
            username=username,
            password=password,
            **extra_fields
        )
