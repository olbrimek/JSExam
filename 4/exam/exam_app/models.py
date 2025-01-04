ffrom django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.TextField()  # For exam purposes only, avoid this in production!
    last_update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username

class Settings(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='settings')
    setting_key = models.CharField(max_length=64)
    value = models.CharField(max_length=64)

    def __str__(self):
        return f'{self.setting_key}: {self.value}'
rom django.db import models

# Create your models here.
