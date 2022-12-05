# Generated by Django 4.0 on 2022-12-05 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sections', '0005_category_upload'),
    ]

    operations = [
        migrations.AddField(
            model_name='realtyfull',
            name='category',
            field=models.CharField(blank=True, choices=[('Real estate', 'Real estate'), ('Auto', 'Auto'), ('Job', 'Job'), ('Services', 'Services'), ('For kids', 'For kids'), ('Electronics', 'Electronics'), ('House and garden', 'House and garden'), ('Fashion and style', 'Fashion and style')], default=None, max_length=255, null=True),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]