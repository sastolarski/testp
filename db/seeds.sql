-- exercises for exercise table

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Bench Press", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Incline Bench Press", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Dumbbell Bench Press", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Dips", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Barbell Row", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Dumbbell Row", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Pullups", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Lat Pulldown", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Overhead Press", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Lateral Raise", true, false);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Barbell Squats", false, true);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Deadlift", false, true);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Front Squats", false, true);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Lunges", false, true);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Romanian Deadlift", false, true);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Leg Extension", false, true);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Leg Curl", false, true);

INSERT INTO exercises (name, upperBody, lowerBody) 
VALUES ("Calf Raises", false, true);

-- a couple fake users. not sure of the format after the password security is added so feel free to alter as needed
-- Passwords need to be encrypted, test accounts will need to be created via web form

-- INSERT INTO users (username, password)
-- VALUES ("steven", "stevenIsCool");

-- INSERT INTO users (username, password)
-- VALUES ("paul", "paulIsCool");

-- INSERT INTO users (username, password)
-- VALUES ("stacy", "stacyIsCool");

-- INSERT INTO users (username, password)
-- VALUES ("russell", "russellIsCool");

-- fake workout history for a couple users.  seqeulize will add IDs

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (1,1,3,10,185);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (1,3,4,6,135);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (1,2,5,10,100);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (2,1,3,10,200);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (2,6,5,10,80);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (2,2,3,10,90);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (2,9,3,8,50);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (3,11,5,10,100);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (3,13,2,15,90);

INSERT INTO userData (userId, exerciseId, sets, reps, weightUsed)
VALUES (3,15,4,10,120);

