import { Link } from "react-router-dom";
import Captura from "./img/Captura.png"
import Socialapp from "./img/socialapp.png"
import "./styles.sass";

const App = () => {

    const button = () => {
       window.scrollTo({top: 570, behavior: 'smooth'});
    };
    
    return (
        <aside id="Main">
            <div className="Section">
                <div className="header">
                    <h1 className="weight-400">Hi, I'm <b>Guilherme Ramos</b></h1>
                    <p>Fullstack Developer & Graphic Designer</p>
                </div>

                <div className="buttons">
                    <Link to="https://github.com/GuiRamos01" target="_blank" rel="noopener noreferrer"><button className="github">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" viewBox="0,0,255.98959,255.98959">
                      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
                      </svg>
                      Github
                    </button></Link>
                    <Link to="https://linkedin.com/in/guilherme-ramos-1135621b1" target="_blank" rel="noopener noreferrer"><button className="linkedin">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" viewBox="0,0,255.98959,255.98959">
                      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                      </svg>
                      LinkedIn
                    </button></Link>
                    <Link to="https://behance.net/guidesign10" target="_blank" rel="noopener noreferrer"><button className="behance">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" viewBox="0,0,255.98959,255.98959">
                      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M6,4c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM17.5,11h2.55664c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5h-2.55664c-0.276,0 -0.5,-0.224 -0.5,-0.5c0,-0.276 0.224,-0.5 0.5,-0.5zM8.91992,11.38477h2.78516c1.644,0 2.625,0.80428 2.625,2.11328c0,0.898 -0.6642,1.68155 -1.5332,1.81055v0.10547c1.122,0.082 1.9375,0.92753 1.9375,2.01953c0.001,1.485 -1.12069,2.42578 -2.92969,2.42578h-2.88477c-0.508,0 -0.91992,-0.41192 -0.91992,-0.91992v-6.63476c0,-0.508 0.41192,-0.91992 0.91992,-0.91992zM9.77344,12.74023v2.15625h1.33203c0.958,0.001 1.48047,-0.39322 1.48047,-1.07422c0,-0.675 -0.48603,-1.08203 -1.33203,-1.08203zM18.96289,13.24023c1.909,0 3.03516,1.21649 3.03516,3.27149v0.52148h-4.44336v0.08789c0.023,0.963 0.58747,1.5625 1.48047,1.5625c0.675,0 1.13831,-0.23997 1.32031,-0.66797h1.5918c-0.258,1.222 -1.37494,1.98438 -2.96094,1.98438c-1.973,0 -3.13476,-1.24566 -3.13477,-3.34766c0,-2.108 1.18533,-3.41211 3.11133,-3.41211zM18.9707,14.55078c-0.793,0 -1.35216,0.55063 -1.41016,1.39063h2.75977c-0.036,-0.857 -0.55161,-1.39062 -1.34961,-1.39062zM9.77344,16.0957v2.4082h1.58008c1.022,0 1.57422,-0.43066 1.57422,-1.22266c0,-0.776 -0.57023,-1.18555 -1.61523,-1.18555z"></path></g></g>
                      </svg>
                      Behance
                    </button></Link>
                </div>

                <div className="buttonSVG" onClick={button} >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
            </div>

            <div className="Section2">
                <div className="Itens">
                    <h2>Design & Branding</h2>
                    <p>+ Identidade Visual</p>
                    <p>+ Figma</p>
                    <p>+ Photoshop</p>
                    <p>+ Social Media & Ads</p>
                    <p>+ Materiais Institucionais</p>
                </div>
            
                <div className="Itens">
                    <h2>Full Stack Developer</h2>
                    <p>+ React (Vite, Javascript ES6+)</p>
                    <p>+ Node.js & Express</p>
                    <p>+ MongoDB</p>
                    <p>+ Tailwind CSS & Shadcn/UI</p>
                    <p>+ API REST (Axios, JWT & RBAC)</p>
                    <p>+ Docker & Linux Server</p>
                    <p>+ WordPress</p>
                </div>
            </div>

            <div className="Section3">
                <h1>FEATURED PROJECT</h1>

                <div className="Project">
                    <img src={Captura} alt="" />
                    <div className="headerProject">
                        <p>YouTube - Clone Homepage</p>
                        <Link to="https://imaginative-entremet-d94497.netlify.app" target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                          </svg>
                          <h3>VIEW DEMO</h3>
                        </Link>

                        <Link to="https://github.com/GuiRamos01/YoutubeClone" target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="110" height="110" viewBox="0 0 30 30">
                              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                          </svg>
                          <h3>SEE MORE</h3>
                        </Link>
                    </div>
                </div>

                <div className="Project">
                    <img src={Socialapp} alt="" />
                    <div className="headerProject">
                        <p>Social App - Projeto de Rede Social</p>
                        <Link to="https://majestic-cajeta-4cf95e.netlify.app" target="_blank" rel="noopener noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                          </svg>
                          <h3>VIEW DEMO</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default App;
