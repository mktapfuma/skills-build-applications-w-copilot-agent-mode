from django.core.management.base import BaseCommand
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate octofit_db with test data for users, teams, activities, leaderboard, and workouts.'

    def handle(self, *args, **kwargs):
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']

        # Test data (replace with actual test data as needed)
        users = [
            {"email": "alice@example.com", "name": "Alice", "team": "Red", "score": 120},
            {"email": "bob@example.com", "name": "Bob", "team": "Blue", "score": 95},
        ]
        teams = [
            {"name": "Red", "members": ["alice@example.com"]},
            {"name": "Blue", "members": ["bob@example.com"]},
        ]
        activities = [
            {"activity_id": 1, "user": "alice@example.com", "type": "run", "distance": 5, "points": 50},
            {"activity_id": 2, "user": "bob@example.com", "type": "walk", "distance": 3, "points": 30},
        ]
        leaderboard = [
            {"leaderboard_id": 1, "team": "Red", "score": 120},
            {"leaderboard_id": 2, "team": "Blue", "score": 95},
        ]
        workouts = [
            {"workout_id": 1, "user": "alice@example.com", "type": "strength", "duration": 30},
            {"workout_id": 2, "user": "bob@example.com", "type": "cardio", "duration": 20},
        ]

        db.users.delete_many({})
        db.teams.delete_many({})
        db.activity.delete_many({})
        db.leaderboard.delete_many({})
        db.workouts.delete_many({})

        db.users.insert_many(users)
        db.teams.insert_many(teams)
        db.activity.insert_many(activities)
        db.leaderboard.insert_many(leaderboard)
        db.workouts.insert_many(workouts)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
        self.stdout.write(str(db.list_collection_names()))
