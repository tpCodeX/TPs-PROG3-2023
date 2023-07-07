
 interface iAlumno{
  nombre: string;
  mail: string;
 }
 
 export interface iCurso{
  carrera:string;
  año:string;
  alumnos:iAlumno[]
  }



class Escuela{
  nombre:string;
  cursos:iCurso[]
  constructor(nombre:string,cursos:iCurso[]){
    this.nombre = nombre;
    this.cursos = cursos;
  }
  
  getNombre(){return this.nombre};
  getCurso1(){return this.cursos[0]};
  getCurso2(){return this.cursos[0]};

}

const alumno1:iAlumno={nombre:"Roberto Carlos",mail:"roberto@gmail.com"};
const alumno2:iAlumno={nombre:"Mario Braulio",mail:"mario@gmail.com"};
const alumno3:iAlumno={nombre:"Dominga Dominguez",mail:"dominga@gmail.com"};
const alumno4:iAlumno={nombre:"Faustina Sarmiento",mail:"faustina@gmail.com"};

const curso1:iCurso={
  carrera:"Desarrollo de Software",
  año:"3º",
  alumnos:[alumno1,alumno4]
}
const curso2:iCurso={
  carrera:"Enología",
  año:"3º",
  alumnos:[alumno2,alumno3]
}

export const IES=new Escuela("IES-9023",[curso1,curso2]);





