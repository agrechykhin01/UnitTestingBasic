exports.employer = (gender, age) => {
    if (gender === 'male' && age < 16)
        return 'Candidate is too young. Minimum age for male is 16';
    if (gender === 'male' && age > 50)
        return 'Candidate is too old. Maximum age for male is 50';
    if (gender === 'female' && age < 20)
        return 'Candidate is too young. Minimum age for female is 20';
    if (gender === 'female' && age > 45)
        return 'Candidate is too old. Maximum age for female is 45';
    return 'Candidate can be hired';
    }