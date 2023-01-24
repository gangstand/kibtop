# Generated by Django 4.1.4 on 2023-01-24 08:23

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_remove_customuser_last_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='username',
            field=models.CharField(default=uuid.uuid4, max_length=255, unique=True),
        ),
    ]
