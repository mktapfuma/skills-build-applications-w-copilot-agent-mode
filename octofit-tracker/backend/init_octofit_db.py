from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient('localhost', 27017)
db = client['octofit_db']

# Create collections
collections = ['users', 'teams', 'activity', 'leaderboard', 'workouts']
for name in collections:
    db.create_collection(name)

# Ensure unique index on email for users
try:
    db.users.create_index([('email', 1)], unique=True)
except Exception as e:
    print(f"Index creation error: {e}")

# List collections
print("Collections in octofit_db:", db.list_collection_names())
