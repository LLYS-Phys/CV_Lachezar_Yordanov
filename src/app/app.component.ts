import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website-cv-angular';
  openedIntroduction = true
  openedWorkExperience = false
  openedEducation = false
  openedSkills = false
  openedAchievements = false
  openedMoreAboutMe = false
  bgLang = true
  introductionText = 'Представяне'
  workExperienceText = 'Трудов опит'
  educationText = 'Образование'
  skillsText = 'Умения'
  achievementsText = 'Постижения'
  moreAboutMeText = 'Още за мен'
  name = 'Лъчезар Йорданов'
  titleIntro = "Представяне"
  introText=`Казвам се Лъчезар Йорданов.
  
На 25 години съм и съм сравнително нов в програмирането, но се уча бързо.
  
Бих го оценил, ако разгледате моя Уебсайт-CV.
  
Ако сте получили този уебсайт, значи смятам компанията ви за страхотна.
  
Бих се радвал да имаме възможността да работим заедно.`
  helloText='Здравейте!'
  navText='И така, ако обичате, разгледайте моя Уебсайт-CV.'
  titleWork='Трудов опит'
  jobTitle1='Преводач от Английски'
  jobTitle2='Специалист Обработка на Данни'
  jobTitle3='Съ-Основател'
  jobTitle4='Преподавател'
  jobTitle5='Съ-Основател и Front-end Програмист'
  jobTitle6='Младши Програмист'
  jobDescription1=`Transifex беше моята най-дълготрайна доброволческа работа.
Това, с което се бях заел, беше превеждане на десктоп и мобилни приложения на български език.
Главният и най-големият проект, с който се бях заел беше превеждането на VLC Media Player на български език.`
  jobDescription2=`J&T Services бяха моите първи стъпки в програмирането.
Това, което научих там бяха основите на HTML&CSS, Python, JavaScript и jQuery.
Поради времето, което трябваше да отделя за образованието си, се наложи да напусна рано.`
  jobDescription3=`StudyHub Bulgaria е първото пространство за споделено учене в Българиа.
То предлага на студентите тихо и модерно място, където те могат да преуспяват с ученето си.
То отвори врати на 1 октомври 2019 и вече е посетено от над 1500 студенти.
StudyHub се управлява от НПО организация - Сдружение "Студенти в Действие", на която аз съм Главен Секретар.`
  jobDescription4=`City Music School е частна музикална школа.
Тя предлага уроци по Класическа, Електрическа и Бас Китара, както и по Пиано и Теория на Музиката.
Моята позиция в City Music School е преподавател по Класическа, Електрическа и Бас Китара.`
  jobDescription5=`CareerHub е платформа за намиране на работа на хора с малко или без опит.
Тя цели да направи процеса по наемане на млади хора по-лесен за компаниите,
както и процесът на намииране на първа работа по-лесен за младежите.
Вместо опит, платформата предлага алтернатива -
специално разработени личностен и кариерен тест, достъпни за всеки младеж.
Като ко-основател на CareerHub, аз съм отговорен за неговата front-end част.`
  jobDescription6='BOR е моето завръщане към програмирането чрез програмиране на онлайн въпросници. Работата ми включва както работа с готови библиотеки, така и изработка на много custom дизайни за медицински проучвания. В работното си ежедневие използвам JavaScript, CSS, Python и XML, както и други технологии, които изникват като нужни.'
  titleEducation='Образование'
  eduEntry1='Софийски Университет'
  eduEntry2='ПЕГ "Екзарх Йосиф I"'
  eduSpec1='Комуникации и Физична Електроника'
  eduSpec2='Английски, Френски, Български'
  eduDescription1=`Физическият Факултет е част от Софийски Университет "Св. Климент Охридски".
Моята специалност беше Комуникации и Физична Електроника.
Главните ѝ аспекти бяха Антени, Сигнали и Физика на Плазмата.`
  eduDescription2=`ПЕГ "Еказах Йосиф I" е първото училище за изучаване на чужди езици в България.
През 5-те си години там, изучавах в дълбочина Английски език до ниво C2 (включително 2 години Английска Литература).
Вторият ми език беше Френски, но съм натрупал по-малко знания в него.`
  eduEntry4='Музикална Школа'
  eduSpec4='Класическа китара'
  eduDescription3='Udemy е платформата, където съживих старите си знания по HTML&CSS и JavaScript, като научих и доста нови неща. В момента преминавам през задълбочен курс за Angular.'
  eduDescription4='Музикалната школа е част от заниманията, предлагани от читалището в Ловеч (моят роден град).Започнах уроците си в 10ти клас и изпъкнах с уменията си за учене, като само след 6 месеца вече бях част от концертите на читалището.'

  clickIntroduction() {
    this.openedIntroduction = true
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickWorkExperience() {
    this.openedIntroduction = false
    this.openedWorkExperience = true
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickEducation() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = true
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickSkills() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = true
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  clickAchievements() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = true
    this.openedMoreAboutMe = false
  }

  clickMoreAboutMe() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = true
  }

  setLangEn() {
    this.bgLang = false
    this.introductionText = 'Introduction'
    this.workExperienceText = 'Work Experience'
    this.educationText = 'Education'
    this.skillsText = 'Skills'
    this.achievementsText = 'Achievements'
    this.moreAboutMeText = 'More About Me'
    this.name = "Lachezar Yordanov"
    this.titleIntro = "Introduction"
    this.introText=`My name is Lachezar Yordanov.

I am 25 years old and fairly new to programming, but I am a really quick learner.

I would appreciate it if you take a look at my Website-CV.

If you have received that website, I consider your company to be awesome.

I would be glad to join your company.`
    this.helloText='Hello!'
    this.navText='So, if you will, take the trip and check out my Website-CV.'
    this.titleWork='Work experience'
    this.jobTitle1='Translator from English'
    this.jobTitle2='Data Processing Expert'
    this.jobTitle3='Co-Founder'
    this.jobTitle4='Teacher'
    this.jobTitle5='Co-Founder & Front-End Developer'
    this.jobTitle6='Junior Programmer'
    this.jobDescription1=`Transifex was my longest volunteer work.
What I had taken up as a project was translating various desktop and mobile applications into Bulgarian.
The main and biggest project I had taken up was translating VLC Media Player into Bulgarian.`
    this.jobDescription2=`J&T Services was my first step in programming I ever took.
What I learned there were the basics of HTML&CSS, Python, JavaScript and jQuery.
Due to the time I had to invest in my education, I had to quit early.`
    this.jobDescription3=`StudyHub is the first co-studying space in Bulgaria.
It offers univeristy students a quiet and modern surrounding, in which they can excel at their studies.
It opened its doors on October 1st 2019 and has already been visited by over 1500 university students.
StudyHub is ran by an NGO - Association "Students in Action", of which I am a Secretary General.`
    this.jobDescription4=`City Music School is a private music school.
It offers lessons in Classical, Electic and Bass Guitar, as well as Piano and Music Theory.
My role in City Music School is a Classical, Electic and Bass Guitar teacher.`
    this.jobDescription5=`CareerHub is a platform for early-stage job-seekers.
It aims to make the process of hiring youngsters easier for the companies,
as well as make the process of finding a first job easier for the younsters.
Instead of experience, the platforms gives an alternative -
specially designed Personal and Career tests, available for every youngster
As a co-founder of CareerHub, I'm responsible for its front-end aspect.`
    this.jobDescription6='BOR is my come back to programming through programming online questionnaires. My work includes working with libraries, as well as creating custom designs for medical studies. In my workday, I usually work JavaScript, CSS, Python and XML, as well as any other techonologies that turn up as necessary for the project.'
    this.titleEducation='Education'
    this.eduEntry1='Sofia University'
    this.eduEntry2='FLS "Ekzarh Josif I"'
    this.eduSpec1='Communications and Physic Electronics'
    this.eduSpec2='English, French, Bulgarian'
    this.eduDescription1=`Faculty of Physics is a part of Sofia University "St. Kliment Ohridski".
My specialty was Communiactions and Physic Electronics.
Its main aspects were Antennas, Signals and Plasma Physics.`
    this.eduDescription2=`FLS "Ekzarh Josif I" is the first foreign-language school in Bulgaria.
In my five years there, I studied extensively English to the level of C2 (including 2 years of literature).
My second language was French, but I have gained less knowledge of it.`
    this.eduEntry4='Music School'
    this.eduSpec4='Classical guitar'
    this.eduDescription3=`Udemy is the platform where I revive my knowledge of HTML&CSS and JavaScript, and gain some new knowledge as well.
I'm currently taking up an extensive course for Angular.`
    this.eduDescription4=`The Music School was part of Lovech's (my hometown) Community Center activities.
I started taking up lessons in the 10th grade and exceled at it, as only after 6 months I was already part of the Community Center's concerts.`

  }

  setLangBg() {
    this.bgLang = true
    this.introductionText = 'Представяне'
    this.workExperienceText = 'Трудов опит'
    this.educationText = 'Образование'
    this.skillsText = 'Умения'
    this.achievementsText = 'Постижения'
    this.moreAboutMeText = 'Още за мен'
    this.name = 'Лъчезар Йорданов'
    this.titleIntro = "Представяне"
    this.introText=`Казвам се Лъчезар Йорданов.
  
На 25 години съм и съм сравнително нов в програмирането, но се уча бързо.
      
Бих го оценил, ако разгледате моя Уебсайт-CV.
      
Ако сте получили този уебсайт, значи смятам компанията ви за страхотна.
      
Бих се радвал да имаме възможността да работим заедно.`
    this.helloText="Здравейте!"
    this.navText="И така, ако обичате, разгледайте моя Уебсайт-CV."
    this.titleWork='Трудов опит'
    this.jobTitle1='Преводач от Английски'
    this.jobTitle2='Специалист Обработка на Данни'
    this.jobTitle3='Съ-Основател'
    this.jobTitle4='Преподавател'
    this.jobTitle5='Съ-Основател и Front-end Програмист'
    this.jobTitle6='Младши Програмист'
    this.jobDescription1=`Transifex беше моята най-дълготрайна доброволческа работа.
Това, с което се бях заел, беше превеждане на десктоп и мобилни приложения на български език.
Главният и най-големият проект, с който се бях заел беше превеждането на VLC Media Player на български език.`
    this.jobDescription2=`J&T Services бяха моите първи стъпки в програмирането.
Това, което научих там бяха основите на HTML&CSS, Python, JavaScript и jQuery.
Поради времето, което трябваше да отделя за образованието си, се наложи да напусна рано.`
    this.jobDescription3=`StudyHub Bulgaria е първото пространство за споделено учене в Българиа.
То предлага на студентите тихо и модерно място, където те могат да преуспяват с ученето си.
То отвори врати на 1 октомври 2019 и вече е посетено от над 1500 студенти.
StudyHub се управлява от НПО организация - Сдружение "Студенти в Действие", на която аз съм Главен Секретар.`
    this.jobDescription4=`City Music School е частна музикална школа.
Тя предлага уроци по Класическа, Електрическа и Бас Китара, както и по Пиано и Теория на Музиката.
Моята позиция в City Music School е преподавател по Класическа, Електрическа и Бас Китара.`
    this.jobDescription5=`CareerHub е платформа за намиране на работа на хора с малко или без опит.
Тя цели да направи процеса по наемане на млади хора по-лесен за компаниите,
както и процесът на намииране на първа работа по-лесен за младежите.
Вместо опит, платформата предлага алтернатива -
специално разработени личностен и кариерен тест, достъпни за всеки младеж.
Като ко-основател на CareerHub, аз съм отговорен за неговата front-end част.`
    this.jobDescription6='BOR е моето завръщане към програмирането чрез програмиране на онлайн въпросници. Работата ми включва както работа с готови библиотеки, така и изработка на много custom дизайни за медицински проучвания. В работното си ежедневие използвам JavaScript, CSS, Python и XML, както и други технологии, които изникват като нужни.'
    this.titleEducation='Образование'
    this.eduEntry1='Софийски Университет'
    this.eduEntry2='ПЕГ "Екзарх Йосиф I"'
    this.eduSpec1='Комуникации и Физична Електроника'
    this.eduSpec2='Английски, Френски, Български'
    this.eduDescription1=`Физическият Факултет е част от Софийски Университет "Св. Климент Охридски".
Моята специалност беше Комуникации и Физична Електроника.
Главните ѝ аспекти бяха Антени, Сигнали и Физика на Плазмата.`
    this.eduDescription2=`ПЕГ "Еказах Йосиф I" е първото училище за изучаване на чужди езици в България.
През 5-те си години там, изучавах в дълбочина Английски език до ниво C2 (включително 2 години Английска Литература).
Вторият ми език беше Френски, но съм натрупал по-малко знания в него.`
    this.eduEntry4='Музикална Школа'
    this.eduSpec4='Класическа китара'
    this.eduDescription3='Udemy е платформата, където съживих старите си знания по HTML&CSS и JavaScript, като научих и доста нови неща. В момента преминавам през задълбочен курс за Angular.'
    this.eduDescription4='Музикалната школа е част от заниманията, предлагани от читалището в Ловеч (моят роден град).Започнах уроците си в 10ти клас и изпъкнах с уменията си за учене, като само след 6 месеца вече бях част от концертите на читалището.'

  }

  introWork(){
    this.openedIntroduction = false
    this.openedWorkExperience = true
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  introEducation(){
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = true
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  introSkills(){
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = true
    this.openedAchievements = false
    this.openedMoreAboutMe = false
  }

  introAchievements() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = true
    this.openedMoreAboutMe = false
  }

  introMore() {
    this.openedIntroduction = false
    this.openedWorkExperience = false
    this.openedEducation = false
    this.openedSkills = false
    this.openedAchievements = false
    this.openedMoreAboutMe = true
  }

}
