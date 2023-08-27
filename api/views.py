from django.shortcuts import render
from django.http import JsonResponse


# retorna um JSON com as rotas da aplicação
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
    return JsonResponse(routes, safe=False) # safe=False -> retorna outros tipos de dados além de Dictionary
