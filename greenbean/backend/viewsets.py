from rest_framework.viewsets import ModelViewSet, ViewSet

from backend.models import Plant, Layout
from backend.serializers import PlantSerializer, LayoutSerializer


class PlantViewSet(ModelViewSet):
    queryset = Plant.objects.filter()
    http_method_names = ['get', 'post', 'delete']
    serializer_class = PlantSerializer


class LayoutViewSet(ModelViewSet):
    queryset = Layout.objects.all()
    http_method_names = ['get', 'post', 'delete']
    serializer_class = LayoutSerializer
