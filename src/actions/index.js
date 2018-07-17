import { 
    FETCH_COURSES,
    TOGGLE_ENROLLED
 } from './types';

export function toggleEnrolled(id) {
    return {
        type: TOGGLE_ENROLLED,
        payload: id
    }
}

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                id: 0,
                title: "Swim Lessons",
                description: "You will have the impossible task of waking up at 9am! it is a very hard thing for 10 year olds. especially in the summer.",
                enrolled: false
            },
            {
                id: 1,
                title: "Watch TV",
                description: "This is something you probably shouldn't do for a long time but I know, and you know that you'll be here for a while.",
                enrolled: false
            },
            {
                id: 2,
                title: "Eat Food/Candy",
                description: "Have you ever thought of eating a vegatable?",
                enrolled: false
            },
            {
                id: 3,
                title: 'Workbook',
                description: "We all know you don't want to do any part of that book, but guess what? You have too, AAhhaahahaHahAhaha!!",
                enrolled: false
            },
            {
                id: 4,
                title: "Outside Time Oof",
                description: 'You should probably get some sun. You could use a heat stroke',
                enrolled: false
            },
            {
                id: 5,
                title: 'Be Annoying',
                description: 'For everyones sake please do not a this to your schedule! We know you do it everyday anyway but please :)',
                enrolled: false
            },
            {
                id: 6,
                title: 'Cringy Youtube Time',
                description: 'Watching adults do stupid challenges that seem pointless and are pointless. Are these videos entertaining? No...',
                enrolled: false
            },
            {
                id: 7,
                title: '"Im Bored"',
                description: 'You seem to be bored half the day so this is a big part of your schedule!',
                enrolled: false
            },
            {
                id: 8,
                title: 'Free Time',
                description: 'Use this time to do anything your heart desires! Unfortunately that includes annoying Sean :(',
                enrolled: false
            },
            {
                id: 9,
                title: 'Learn Quantum Physics',
                description: 'Quantum theory is the theoretical basis of modern physics that explains the nature and behavior of matter and energy on the atomic and subatomic level. The nature and behavior of matter and energy at that level is sometimes referred to as quantum physics and quantum mechanics.',
                enrolled: false
            },
            {
                id: 10,
                title: 'Sleeply Time',
                description: "This includes getting ready for bed, something you don't do very often(because you usually just pass out somewhere). So get up, brush those beaver teeth and sleep well!",
                enrolled: false
            }
        ]
    }
}