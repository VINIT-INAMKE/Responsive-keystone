class OutHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="nav container">
    <div class="nav__data">
      <a href="/" class="nav__logo">
        <img
          src="https://media.discordapp.net/attachments/851837926496796694/1229814106828181654/keystone_logo.png?ex=66310ca3&is=661e97a3&hm=9946e263d94d7ff17492c84153f41643bbd3e95a06fdc7041db2e70c5bb5964a&=&format=webp&quality=lossless"
          alt=""
        /><img
          src="https://cdn.discordapp.com/attachments/851837926496796694/1230162947683127316/keystonename.png?ex=66325186&is=661fdc86&hm=405bcf3a5db9c3d61afd4f8cf8f671d595e4f8be73a419624439ad6bd4e8f3b8&"
          alt=""
          class="logo-2"
        />
      </a>
      <!-- <img class="naac" src="./images/naac.jpg" alt="" /> -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-menu-3-line nav__toggle-menu"></i>
        <i class="ri-close-line nav__toggle-close"></i>
      </div>
    </div>

    <!--=============== NAV MENU ===============-->
    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list">
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            About <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              <div class="dropdown__group">
              <!--<div class="dropdown__icon">
                <i class="ri-flashlight-line"></i>
                </div>--!>

               <span class="dropdown__title">About Us</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="./about/collegeprofile.html" class="dropdown__link">College Profile</a>
                  </li>
                 
                  <li>
                    <a href="./about/principalsdesk.html" class="dropdown__link">
                     From the Desk Of Principle 
                    </a>
                  </li>
                  <li>
                    <a href="./about/keypersons.html" class="dropdown__link">Key Persons</a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link">Core Values</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <!--=============== DROPDOWN 1 ===============-->
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            Admissions <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              

              <div class="dropdown__group">
                <div class="dropdown__icon">
                <i class="ri-community-line"></i>
                </div>

                <span class="dropdown__title">Admissions</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="./admission/brochure.html" class="dropdown__link"
                      >Admission Brochure</a
                    >
                    </li>
                    <li>
                      <a href="./admission/procedure.html" class="dropdown__link"
                        >Admission Procedure</a
                      >
                    </li>
                  <li>
                    <a href="./admission/enquiry.html" class="dropdown__link"
                      >Admission Enquiry</a
                    >
                  </li>
                  <li>
                    <a href="./admission/notice.html" class="dropdown__link"
                      >Admission Notice</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            Placements <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-code-line"></i>
                </div>

                <span class="dropdown__title">Training And Placements Department</span>

                <ul class="dropdown__list">
                <li>
                <a href="./t&p/about.html" class="dropdown__link">About Department</a>
                  </li> 
                   <li>
              <a href="./t&p/coordinators.html" class="dropdown__link">Co-ordinators</a>
                  </li>
                  <li>
                    <a href="./t&p/preplacement.html" class="dropdown__link">Preplacement Gallery</a>
                  </li>
                </ul>
              </div>

              
            </div>
          </div>
        </li>

        <!--=============== DROPDOWN 3 ===============-->
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            Departments <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-community-line"></i>
                </div>

                <span class="dropdown__title">First Year</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="./FE/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="./FE/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="./FE/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="./FE/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="./FE/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="./FE/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="./FE/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="./FE/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="./FE/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>

              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-computer-line"></i>
                </div>

                <span class="dropdown__title">Computer</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="./Comp/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="./Comp/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-ram-line"></i>
                </div>

                <span class="dropdown__title">ENTC</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="./ENTC/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="./ENTC/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-tools-line"></i>
                </div>

                <span class="dropdown__title">Mechanical</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="./Mechanical/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="./Mechanical/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="./Mechanical/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a
                      href="./Mechanical/syllabus.html"
                      class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="./Mechanical/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a
                      href="./Mechanical/timetables.html"
                      class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a
                      href="./Mechanical/association.html"
                      class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a
                      href="./Mechanical/studentclubs.html"
                      class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a
                      href="./Mechanical/results.html"
                      class="dropdown__link"
                    >
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-robot-2-line"></i>
                </div>

                <span class="dropdown__title">AIDS</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="./AIDS/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="./AIDS/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="./contactus.html" class="nav__link">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
      `;
  }
}
class InHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="nav container">
    <div class="nav__data">
      <a href="/" class="nav__logo">
        <img
          src="https://media.discordapp.net/attachments/851837926496796694/1229814106828181654/keystone_logo.png?ex=66310ca3&is=661e97a3&hm=9946e263d94d7ff17492c84153f41643bbd3e95a06fdc7041db2e70c5bb5964a&=&format=webp&quality=lossless"
          alt=""
        /><img
          src="https://cdn.discordapp.com/attachments/851837926496796694/1230162947683127316/keystonename.png?ex=66325186&is=661fdc86&hm=405bcf3a5db9c3d61afd4f8cf8f671d595e4f8be73a419624439ad6bd4e8f3b8&"
          alt=""
          class="logo-2"
        />
      </a>
      <!-- <img class="naac" src="../images/naac.jpg" alt="" /> -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-menu-3-line nav__toggle-menu"></i>
        <i class="ri-close-line nav__toggle-close"></i>
      </div>
    </div>

    <!--=============== NAV MENU ===============-->
    <div class="nav__menu" id="nav-menu">
      <ul class="nav__list">
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            About <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              <div class="dropdown__group">
              <!--<div class="dropdown__icon">
              <i class="ri-flashlight-line"></i>
              </div>--!>

                <span class="dropdown__title">About Us</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="../about/collegeprofile.html" class="dropdown__link">College Profile</a>
                  </li>
                  
                  <li>
                    <a href="../about/principalsdesk.html" class="dropdown__link"
                      >From the Desk Of Principle</a
                    >
                  </li>
                  <li>
                    <a href="../about/keypersons.html" class="dropdown__link">Key Persons</a>
                  </li>
                  <li>
                    <a href="#" class="dropdown__link">Core Values</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <!--=============== DROPDOWN 1 ===============-->
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            Admissions <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              

              <div class="dropdown__group">
                <div class="dropdown__icon">
                <i class="ri-community-line"></i>
                </div>

                <span class="dropdown__title">Admissions</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="../admission/brochure.html" class="dropdown__link"
                      >Admission Brochure</a
                    >
                    </li>
                    <li>
                      <a href="../admission/procedure.html" class="dropdown__link"
                        >Admission Procedure</a
                      >
                    </li>
                  <li>
                    <a href="../admission/enquiry.html" class="dropdown__link"
                      >Admission Enquiry</a
                    >
                  </li>
                  <li>
                    <a href="../admission/notice.html" class="dropdown__link"
                      >Admission Notice</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            Placements <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-code-line"></i>
                </div>

                <span class="dropdown__title">Training And Placements Department</span>

                <ul class="dropdown__list">
                <li>
                <a href="../t&p/about.html" class="dropdown__link">About Department</a>
                  </li> 
                   <li>
              <a href="../t&p/coordinators.html" class="dropdown__link">Co-ordinators</a>
                  </li>
                  <li>
                    <a href="../t&p/preplacement.html" class="dropdown__link">Preplacement Gallery</a>
                  </li>
                </ul>
              </div>

              
            </div>
          </div>
        </li>

        <!--=============== DROPDOWN 3 ===============-->
        <li class="dropdown__item">
          <div class="nav__link dropdown__button">
            Departments <i class="ri-arrow-down-s-line dropdown__arrow"></i>
          </div>

          <div class="dropdown__container">
            <div class="dropdown__content">
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-community-line"></i>
                </div>

                <span class="dropdown__title">First Year</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="../FE/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="../FE/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="../FE/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="../FE/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="../FE/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="../FE/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="../FE/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="../FE/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="../FE/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>

              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-computer-line"></i>
                </div>

                <span class="dropdown__title">Computer</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="../Comp/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="../Comp/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-ram-line"></i>
                </div>

                <span class="dropdown__title">ENTC</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="../ENTC/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="../ENTC/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-tools-line"></i>
                </div>

                <span class="dropdown__title">Mechanical</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="../Mechanical/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="../Mechanical/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a
                      href="../Mechanical/faculty.html"
                      class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a
                      href="../Mechanical/syllabus.html"
                      class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="../Mechanical/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a
                      href="../Mechanical/timetables.html"
                      class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a
                      href="../Mechanical/association.html"
                      class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a
                      href="../Mechanical/studentclubs.html"
                      class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a
                      href="../Mechanical/results.html"
                      class="dropdown__link"
                    >
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown__group">
                <div class="dropdown__icon">
                  <i class="ri-robot-2-line"></i>
                </div>

                <span class="dropdown__title">AIDS</span>

                <ul class="dropdown__list">
                  <li>
                    <a href="../AIDS/about.html" class="dropdown__link"
                      >About Department</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/hod.html" class="dropdown__link"
                      >From the Desk of HOD</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/faculty.html" class="dropdown__link"
                      >Faculty</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/syllabus.html" class="dropdown__link"
                      >Syllabus</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/labs.html" class="dropdown__link"
                      >Laboratories</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/timetables.html" class="dropdown__link"
                      >Timetables</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/association.html" class="dropdown__link"
                      >Student Associations</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/studentclubs.html" class="dropdown__link"
                      >Student Clubs</a
                    >
                  </li>
                  <li>
                    <a href="../AIDS/results.html" class="dropdown__link">
                      Top Rankers</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="../contactus.html" class="nav__link">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
    `;
  }
}

class InFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
   
<div class="footer-left">
<img
  src="https://media.discordapp.net/attachments/851837926496796694/1228761773411401801/keystone.png?ex=662d3894&is=661ac394&hm=b58fa6fc697eb8df14284159e9f0e212f4589e798f8e1667e835b86350d7ed5e&=&format=webp&quality=lossless"
  alt=""
/>
<p>
Keystone School Of Engineering, <br />
Near Handewadi Chowk, <br />
Urali Devachi, 
Shewalewadi, <br />
Pune – 412308
</p>
</div>
<ul class="footer-right">
<li>
  <h2>List 1</h2>
  <ul class="footer-box">
    <li>
      <a href="../AIDS/about.html">About Department</a>
    </li>
    <li>
      <a href="../AIDS/hod.html">From the Desk of HOD</a>
    </li>
    <li>
      <a href="../AIDS/faculty.html">Faculty</a>
    </li>
    <li>
      <a href="../AIDS/syllabus.html">Syllabus</a>
    </li>
    <li>
      <a href="../AIDS/labs.html">Laboratories</a>
    </li>
  </ul>
</li>
<li>
  <h2>List 2</h2>
  <ul class="footer-box">
    <li>
      <a href="../AIDS/timetables.html">Timetables</a>
    </li>
    <li>
      <a href="../AIDS/association.html">Student Associations</a>
    </li>
    <li>
      <a href="../AIDS/studentclubs.html">Student Clubs</a>
    </li>
    <li>
      <a href="../AIDS/results.html"> Top Rankers</a>
    </li>
  </ul>
</li>
<li>
  <h2>List 3</h2>
  <ul class="footer-box">
    <li>
      <a href="../AIDS/timetables.html">Timetables</a>
    </li>
    <li>
      <a href="../AIDS/association.html">Student Associations</a>
    </li>
    <li>
      <a href="../AIDS/studentclubs.html">Student Clubs</a>
    </li>
    <li>
      <a href="../AIDS/results.html"> Top Rankers</a>
    </li>
  </ul>
</li>
</ul>
<div class="footer-bottom">
<div class="socials">
  <a href="#"><i class="ri-facebook-fill"></i> </a>
  <a href="#"><i class="ri-twitter-fill"></i></a>
  <a href="#"><i class="ri-youtube-fill"></i></a>
  <a href="#"><i class="ri-instagram-fill"></i></a>
  <a href="#"><i class="ri-whatsapp-fill"></i></a>
</div>
<p>
  Copyright &copy; 2012 - 2024 Shalakha Foundation. All rights reserved.
</p>
</div>
</footer>
        `;
  }
}

class OutFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    <div class="footer-left">
    <img
      src="https://media.discordapp.net/attachments/851837926496796694/1228761773411401801/keystone.png?ex=662d3894&is=661ac394&hm=b58fa6fc697eb8df14284159e9f0e212f4589e798f8e1667e835b86350d7ed5e&=&format=webp&quality=lossless"
      alt=""
    />
    <p>
    Keystone School Of Engineering, <br />
    Near Handewadi Chowk, <br />
    Urali Devachi, 
    Shewalewadi, <br />
    Pune – 412308
    </p>
  </div>
  <ul class="footer-right">
    <li>
      <h2>List 1</h2>
      <ul class="footer-box">
        <li>
          <a href="./AIDS/about.html">About Department</a>
        </li>
        <li>
          <a href="./AIDS/hod.html">From the Desk of HOD</a>
        </li>
        <li>
          <a href="./AIDS/faculty.html">Faculty</a>
        </li>
        <li>
          <a href="./AIDS/syllabus.html">Syllabus</a>
        </li>
        <li>
          <a href="./AIDS/labs.html">Laboratories</a>
        </li>
      </ul>
    </li>
    <li>
      <h2>List 2</h2>
      <ul class="footer-box">
        <li>
          <a href="./AIDS/timetables.html">Timetables</a>
        </li>
        <li>
          <a href="./AIDS/association.html">Student Associations</a>
        </li>
        <li>
          <a href="./AIDS/studentclubs.html">Student Clubs</a>
        </li>
        <li>
          <a href="./AIDS/results.html"> Top Rankers</a>
        </li>
      </ul>
    </li>
    <li>
      <h2>List 3</h2>
      <ul class="footer-box">
        <li>
          <a href="./AIDS/timetables.html">Timetables</a>
        </li>
        <li>
          <a href="./AIDS/association.html">Student Associations</a>
        </li>
        <li>
          <a href="./AIDS/studentclubs.html">Student Clubs</a>
        </li>
        <li>
          <a href="./AIDS/results.html"> Top Rankers</a>
        </li>
      </ul>
    </li>
  </ul>
  <div class="footer-bottom">
    <div class="socials">
      <a href="#"><i class="ri-facebook-fill"></i> </a>
      <a href="#"><i class="ri-twitter-fill"></i></a>
      <a href="#"><i class="ri-youtube-fill"></i></a>
      <a href="#"><i class="ri-instagram-fill"></i></a>
      <a href="#"><i class="ri-whatsapp-fill"></i></a>
    </div>
    <p>
      Copyright &copy; 2012 - 2024 Shalakha Foundation. All rights reserved.
    </p>
  </div>
  </footer>
          `;
  }
}
customElements.define("oute-header", OutHeader);
customElements.define("inn-header", InHeader);
customElements.define("inn-footer", InFooter);
customElements.define("oute-footer", OutFooter);
