# Generated by Django 4.0.4 on 2022-05-07 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0003_alter_produtos_descricao_alter_produtos_nome'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produtos',
            name='imagem',
            field=models.ImageField(upload_to='media/%Y/%m/%d'),
        ),
    ]