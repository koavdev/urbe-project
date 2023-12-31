from rest_framework.serializers import ModelSerializer
from .models import Note


# serializa as notas
class NoteSerializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__' # ['body', 'updated', 'created']