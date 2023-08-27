from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializer
from .utils import updateNote, getNoteDetail, getNotesList, deleteNote, createNote




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


@api_view(['GET', 'POST'])
def getNotes(request):
    
    # se o método HTTP for GET, então retorna todas as notas
    if request.method == 'GET':
        return getNotesList(request)
    
    # se o método HTTP for POST, então cria uma nota nova
    if request.method == 'POST':
        return createNote(request)


@api_view(['GET', 'PUT', 'DELETE'])
def getNote(request, pk):
    
    # se o método HTTP for GET, então retorna o conteúdo da nota
    if request.method == 'GET':
        return getNoteDetail(request, pk)
    
    # se o método HTTP for PUT, então atualiza a nota
    if request.method == 'PUT':
        return updateNote(request, pk)
    
    # se o método HTTP for DELETE, então deleta a nota
    if request.method == 'DELETE':
        return deleteNote(request, pk)

""" # cria uma nota nova
@api_view(['POST'])
def createNote(request):
    data = request.data
    note = Note.objects.create(
        body = data['body']
    )
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


# atualiza uma nota a partir do id
@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

# delete uma nota a partir do id
@api_view(['DELETE'])
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response('Note was deleted') """