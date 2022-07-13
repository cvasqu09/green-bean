from rest_framework import serializers

from backend.models import Plant, Layout
from jsonschema import validate, ValidationError


class PlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = '__all__'


class LayoutSerializer(serializers.ModelSerializer):
    layout_schema = {
        "type": "object",
        "properties": {
            "rows": {
                "type": "number"
            },
            "cols": {
                "type": "number",
            },
            "layoutDefinition": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "x": {
                            "type": "number",
                            "default": 0
                        },
                        "y": {
                            "type": "number",
                            "default": 0
                        },
                        "w": {
                            "type": "number",
                            "default": 0
                        },
                        "h": {
                            "type": "number",
                            "default": 0
                        },
                        "static": {
                            "type": "boolean",
                            "default": False
                        },
                        "identifier": {
                            "type": "string",
                            "default": ""
                        },
                    },
                }
            }
        }
    }

    def validate_configuration(self, configuration):
        print("configuration", configuration)
        try:
            validate(configuration, self.layout_schema)
        except ValidationError as e:
            raise serializers.ValidationError("Error with configuration ", e.message)

    class Meta:
        model = Layout
        fields = '__all__'
