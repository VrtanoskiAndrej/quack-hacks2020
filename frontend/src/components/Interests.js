const interests = ['Reading', 'Gaming', 'Rocket Building', 'Watching TV', 'Family Time', 'Movies', 'Fishing', 'Computer', 'Gardening', 'Renting Movies', 'Walking', 'Exercise', 'Music', 'Entertaining', 'Hunting', 'Team Sports', 'Shopping', 'Traveling', 'Sleeping', 'Socializing', 'Sewing', 'Golf', 'Relaxing', 'Playing Music', 'Housework', 'Crafts', 'Watching Sports', 'Bicycling', 'Playing Cards', 'Hiking', 'Cooking', 'Swimming', 'Camping', 'Skiing', 'Writing', 'Boating', 'Motorcycling', 'Animal Care', 'Bowling', 'Painting', 'Running', 'Dancing', 'Horseback Riding', 'Tennis', 'Theater', 'Billiards', 'Beach', 'Volunteer Work'];
module.exports = interests.map((name, id) => ({ id, name }))
