# Generated by Django 4.0.4 on 2022-05-07 18:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0006_imagens'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produtos',
            name='imagem',
        ),
    ]