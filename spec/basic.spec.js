const functionsIntro = require('../unittest.functions');

describe(`Hiring the people.`, () => {
    describe(`#employer`, () => {
        const employer = functionsIntro.employer;        

        it(`case: should provide reason if male candidate too young`, () => {            
            expect(employer('male', 15))
                .toBe(`Candidate is too young. Minimum age for male is 16`, `Looks like you are trying to hire too young male`)
        });

        it(`case: should provide reason if female candidate too young`, () => {            
            expect(employer('female', 19))
                .toBe(`Candidate is too young. Minimum age for female is 20`, `Looks like you are trying to hire too young female`)
        });

        it(`case: should provide reason if male candidate too old`, () => {            
            expect(employer('male', 51))
                .toBe(`Candidate is too old. Maximum age for male is 50`, `Looks like you are trying to hire too old male`)
        });

        it(`case: should provide reason if female candidate too old`, () => {            
            expect(employer('female', 46))
                .toBe(`Candidate is too old. Maximum age for female is 45`, `Looks like you are trying to hire too old female`)
        });

        it(`case: should hire candidate - male 16`, () => {            
            expect(employer('male', 16))
                .toBe(`Candidate can be hired`, `Looks like you are should be able to hire this candidate`)
        });

        it(`case: should hire candidate male 50`, () => {            
            expect(employer('male', 50))
                .toBe(`Candidate can be hired`, `Looks like you are should be able to hire this candidate`)
        });

        it(`case: should hire candidate female 20`, () => {            
            expect(employer('female', 20))
                .toBe(`Candidate can be hired`, `Looks like you are should be able to hire this candidate`)
        });

        it(`case: hould hire candidate female 45`, () => {            
            expect(employer('female', 45))
                .toBe(`Candidate can be hired`, `Looks like you are should be able to hire this candidate`)
        });

        it(`case: should hire candidate male 40`, () => {            
            expect(employer('male', 40))
                .toBe(`Candidate can be hired`, `Looks like you are should be able to hire this candidate`)
        });

        it(`case: should hire candidate female 40`, () => {            
            expect(employer('female', 40))
                .toBe(`Candidate can be hired`, `Looks like you are should be able to hire this candidate`)
        })
    });
    
});