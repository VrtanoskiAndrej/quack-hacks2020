const interests = [
    'Reading', 'Gaming',
    'Rocket Building', 'Watching TV',
    'Family Time', 'Movies',
    'Fishing', 'Computer',
    'Gardening', 'Renting Movies']
module.exports = interests.map((name, id) => ({id, name}))
