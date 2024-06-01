from django import forms
from django.contrib.auth import forms as admin_forms
from django.contrib.auth import get_user_model

User = get_user_model()


class UserChangeForm(admin_forms.UserChangeForm):
    class Meta(admin_forms.UserChangeForm.Meta):
        model = User

class UserCreationForm(admin_forms.UserCreationForm):
    username = forms.CharField(
        max_length=User._meta.get_field("username").max_length,
        help_text=User._meta.get_field("username").help_text,
        label=User._meta.get_field("username").verbose_name,
    )

    class Meta(admin_forms.UserCreationForm.Meta):
        model = User
        fields = ("first_name", "last_name", "email", "username")

    error_messages = {
        "duplicate_email": "A user with this email already exists.",
        "duplicate_username": "A user with this username already exists.",
    }

    def clean_email(self):
        email = self.cleaned_data["email"]
        try:
            User.objects.get(email=email)
        except User.DoesNotExist:
            return email
        raise forms.ValidationError(self.error_messages["duplicate_email"])

    def clean_username(self):
        username = self.cleaned_data["username"]
        try:
            User.objects.get(username=username)
        except User.DoesNotExist:
            return username
        raise forms.ValidationError(self.error_messages["duplicate_username"])