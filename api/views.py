from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer




# retorna um JSON com as rotas da aplicação
@api_view(['GET']) # function based views
def getRoutes(request):

    # rotas JSON
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Retorna uma lista com as notas'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Retorna apenas uma nota única'
        }
    ]
    
    return Response(routes)


# retorna um JSON com as notas criadas
@api_view(['GET'])
def getNotes(request):
    notes = Note.objects.all() # retorna todos as notas do banco de dados
    serializer = NoteSerializer(notes, many=True) # many = True -> mais de 1 objeto
    return Response(serializer.data)


# retorna um JSON com a nota do respectivo ID como parâmetro
@api_view(['GET'])
def getNote(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)