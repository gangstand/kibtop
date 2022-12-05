# Generated by Django 4.0 on 2022-12-05 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sections', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='stock',
            old_name='upload_stock',
            new_name='background',
        ),
        migrations.AddField(
            model_name='stock',
            name='desc',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='stock',
            name='img',
            field=models.FileField(default=1, upload_to='stock/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='stock',
            name='isDark',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]
