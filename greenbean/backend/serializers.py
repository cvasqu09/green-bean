from rest_framework import serializers

from backend.models import Plant, Layout


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'


class LayoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Layout
        fields = '__all__'
