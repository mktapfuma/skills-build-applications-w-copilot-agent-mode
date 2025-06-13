from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User, Team, Activity, Leaderboard, Workout
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

@api_view(["GET"])
def api_root(request, format=None):
    return Response({
        "users": "https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/users/",
        "teams": "https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/teams/",
        "activity": "https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/activity/",
        "leaderboard": "https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/leaderboard/",
        "workouts": "https://urban-guide-pjjxqgvqxvqq3497-8000.app.github.dev/api/workouts/",
    })
