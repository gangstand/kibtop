# Generated by Django 4.1.4 on 2023-03-18 19:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('seo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CategoryKey',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255, unique=True)),
            ],
            options={
                'verbose_name': 'Ключи категорий',
            },
        ),
        migrations.AlterModelOptions(
            name='metadescription',
            options={'verbose_name': 'Мета теги type=description'},
        ),
        migrations.AlterModelOptions(
            name='metakeywords',
            options={'verbose_name': 'Мета теги type=keywords'},
        ),
        migrations.RemoveField(
            model_name='metateg',
            name='id',
        ),
        migrations.CreateModel(
            name='Pathname',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pathname', models.CharField(max_length=255)),
                ('category', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='seo.categorykey')),
            ],
        ),
        migrations.AlterField(
            model_name='metateg',
            name='category_key',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='seo.categorykey'),
        ),
        migrations.AlterField(
            model_name='metateg',
            name='pathname',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='seo.pathname'),
        ),
        migrations.DeleteModel(
            name='MetaCategoryKey',
        ),
    ]
