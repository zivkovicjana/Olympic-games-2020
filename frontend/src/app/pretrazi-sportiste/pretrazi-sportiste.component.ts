import { Component, OnInit } from '@angular/core';
import { Sportista } from '../models/sportista';
import { SportIDisciplina } from '../models/sport_i_disciplina';
import { Zemlja } from '../models/zemlja';
import { SportIDisciplinaService } from '../sport-i-disciplina.service';
import { SportistaService } from '../sportista.service';
import { ZemljaService } from '../zemlja.service';

@Component({
  selector: 'app-pretrazi-sportiste',
  templateUrl: './pretrazi-sportiste.component.html',
  styleUrls: ['./pretrazi-sportiste.component.css']
})
export class PretraziSportisteComponent implements OnInit {

  constructor(private sportistaServis:SportistaService,
    private zemljaServis:ZemljaService,
    private sportIDisciplinaServis:SportIDisciplinaService) { }
 
  ngOnInit(): void {
    this.zemljaServis.dohvSveZemlje().subscribe((zemlje:Zemlja[])=>{
      if(zemlje){
        this.sveZemlje=zemlje;
      }
    });
    this.sportIDisciplinaServis.dohvatiSveSportoveIDiscMuski().subscribe((sportovi:SportIDisciplina[])=>{
      if(sportovi){
        let n=0;
        for(let i=0;i<sportovi.length;i++){
          this.sviSportovi[n]=sportovi[i];
          for(let j=i+1;j<sportovi.length;j++){
             if(sportovi[i].sport==sportovi[j].sport){
               i++;
             }
          }
          n++;
        }
      }
    });
  }

  sveZemlje:Zemlja[];
  sviSportovi:SportIDisciplina[]=[];
  sveDiscipline:SportIDisciplina[]=[];

  imeIPrezime:string;
  drzava:string;
  sport:string;
  disciplina:string;
  pol:string;
  medalja:string;

  sviSportisti:Sportista[]=[];

  poruka:string;

  itemsPerPage1: number;
  p1: number = 1;

  nadjiDiscipline(){
    this.sportIDisciplinaServis.dohvSportIPol(this.sport).subscribe((sportovi:SportIDisciplina[])=>{
      if(sportovi){
        this.sveDiscipline=[];
        for(let i=0;i<sportovi.length;i++){
          this.sveDiscipline[i]=sportovi[i];
        }
      }
    })
  }

  s:boolean;

  pretrazi(){
      if(!this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && !this.medalja && !this.pol){
        this.sportistaServis.dohvSveSportiste().subscribe((sportisti:Sportista[])=>{
          if(sportisti){
            this.sviSportisti=sportisti;
          }
        })
      }
      else{
        if(this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && !this.medalja && !this.pol){
          this.sportistaServis.dohvSportistePoImenuIPrezimenu(this.imeIPrezime).subscribe((sportisti:Sportista[])=>{
            if(sportisti){
              this.sviSportisti=sportisti;
            }
          })
        }
        else{
          if(!this.imeIPrezime && this.drzava && !this.sport && !this.disciplina && !this.pol && !this.medalja){
            this.sportistaServis.dohvSportistePoDrzavi(this.drzava).subscribe((sportisti:Sportista[])=>{
              if(sportisti){
                this.sviSportisti=sportisti;
              }
            })
          }
          else{
            if (!this.imeIPrezime && !this.drzava && this.sport && !this.disciplina && !this.pol && !this.medalja){
              this.sportistaServis.dohvSportistePoSportu(this.sport).subscribe((sportisti:Sportista[])=>{
                if(sportisti){
                  this.sviSportisti=sportisti;
                }
              })
            }
            else{
              if (!this.imeIPrezime && !this.drzava && !this.sport && this.disciplina && !this.pol && !this.medalja){
                this.sportistaServis.dohvSportistePoDisciplini(this.disciplina).subscribe((sportisti:Sportista[])=>{
                  if(sportisti){
                    this.sviSportisti=sportisti;
                  }
                })
              }
              else{
                if (!this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && this.pol && !this.medalja){
                  this.sportistaServis.dohvSportistePoPolu(this.pol).subscribe((sportisti:Sportista[])=>{
                    if(sportisti){
                      this.sviSportisti=sportisti;
                    }
                  })
                }
                else{
                  if (!this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && !this.pol && this.medalja){
                    this.sportistaServis.dohvSportisteSaMedaljom().subscribe((sportisti:Sportista[])=>{
                      if(sportisti){
                        this.sviSportisti=sportisti;
                      }
                    })
                  }
                  else{
                    if (this.imeIPrezime && this.drzava && !this.sport && !this.disciplina && !this.pol && !this.medalja){
                      this.sportistaServis.dohvSportistePoImenuIDrzavi(this.imeIPrezime, this.drzava).subscribe((sportisti:Sportista[])=>{
                        if(sportisti){
                          this.sviSportisti=sportisti;
                        }
                      })
                    }
                    else{
                      if (this.imeIPrezime && !this.drzava && this.sport && !this.disciplina && !this.pol && !this.medalja){
                        this.sportistaServis.dohvSportistePoImenuISportu(this.imeIPrezime, this.sport).subscribe((sportisti:Sportista[])=>{
                          if(sportisti){
                            this.sviSportisti=sportisti;
                          }
                        })
                      }
                      else{
                        if (this.imeIPrezime && !this.drzava && !this.sport && this.disciplina && !this.pol && !this.medalja){
                          this.sportistaServis.dohvSportistePoImenuIDisciplini(this.imeIPrezime, this.disciplina).subscribe((sportisti:Sportista[])=>{
                            if(sportisti){
                              this.sviSportisti=sportisti;
                            }
                          })
                        }
                        else{
                          if (this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && this.pol && !this.medalja){
                            this.sportistaServis.dohvSportistePoImenuIPolu(this.imeIPrezime, this.pol).subscribe((sportisti:Sportista[])=>{
                              if(sportisti){
                                this.sviSportisti=sportisti;
                              }
                            })
                          }
                          else{
                            if (this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && !this.pol && this.medalja){
                              this.sportistaServis.dohvSportistePoImenuIMedaljama(this.imeIPrezime).subscribe((sportisti:Sportista[])=>{
                                if(sportisti){
                                  this.sviSportisti=sportisti;
                                }
                              })
                            }
                            else{
                              if (!this.imeIPrezime && !this.drzava && this.sport && !this.disciplina && this.pol && !this.medalja){
                                this.sportistaServis.dohvSportistePoPoluISportu(this.pol, this.sport).subscribe((sportisti:Sportista[])=>{
                                  if(sportisti){
                                    this.sviSportisti=sportisti;
                                  }
                                })
                              }
                              else{
                                if (!this.imeIPrezime && !this.drzava && !this.sport && this.disciplina && this.pol && !this.medalja){
                                  this.sportistaServis.dohvSportistePoPoluIDisciplini(this.pol, this.disciplina).subscribe((sportisti:Sportista[])=>{
                                    if(sportisti){
                                      this.sviSportisti=sportisti;
                                    }
                                  })
                                }
                                else{
                                  if (!this.imeIPrezime && this.drzava && !this.sport && !this.disciplina && this.pol && !this.medalja){
                                    this.sportistaServis.dohvSportistePoPoluIDrzavi(this.pol, this.drzava).subscribe((sportisti:Sportista[])=>{
                                      if(sportisti){
                                        this.sviSportisti=sportisti;
                                      }
                                    })
                                  }
                                  else{
                                    if (!this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && this.pol && this.medalja){
                                      this.sportistaServis.dohvSportistePoPoluIMedaljama(this.pol).subscribe((sportisti:Sportista[])=>{
                                        if(sportisti){
                                          this.sviSportisti=sportisti;
                                        }
                                      })
                                    }
                                    else{
                                      if (!this.imeIPrezime && !this.drzava && this.sport && this.disciplina && !this.pol && !this.medalja){
                                        this.sportistaServis.dohvSportistePoSportuIDisciplini(this.sport, this.disciplina).subscribe((sportisti:Sportista[])=>{
                                          if(sportisti){
                                            this.sviSportisti=sportisti;
                                          }
                                        })
                                      }
                                      else{
                                        if (!this.imeIPrezime && this.drzava && this.sport && !this.disciplina && !this.pol && !this.medalja){
                                          this.sportistaServis.dohvSportistePoSportuIDrzavi(this.sport, this.drzava).subscribe((sportisti:Sportista[])=>{
                                            if(sportisti){
                                              this.sviSportisti=sportisti;
                                            }
                                          })
                                        }
                                        else{
                                          if (!this.imeIPrezime && !this.drzava && this.sport && !this.disciplina && !this.pol && this.medalja){
                                            this.sportistaServis.dohvSportistePoSportuIMedaljama(this.sport).subscribe((sportisti:Sportista[])=>{
                                              if(sportisti){
                                                this.sviSportisti=sportisti;
                                              }
                                            })
                                          }
                                          else{
                                            if (!this.imeIPrezime && this.drzava && !this.sport && this.disciplina && !this.pol && !this.medalja){
                                              this.sportistaServis.dohvSportistePoDiscipliniIDrzavi(this.disciplina, this.drzava).subscribe((sportisti:Sportista[])=>{
                                                if(sportisti){
                                                  this.sviSportisti=sportisti;
                                                }
                                              })
                                            }
                                            else{
                                              if (!this.imeIPrezime && !this.drzava && !this.sport && this.disciplina && !this.pol && this.medalja){
                                                this.sportistaServis.dohvSportistePoDiscipliniIMedaljama(this.disciplina).subscribe((sportisti:Sportista[])=>{
                                                  if(sportisti){
                                                    this.sviSportisti=sportisti;
                                                  }
                                                })
                                              }
                                              else{
                                                if (!this.imeIPrezime && this.drzava && !this.sport && !this.disciplina && !this.pol && this.medalja){
                                                  this.sportistaServis.dohvSportistePoDrzaviIMedaljama(this.drzava).subscribe((sportisti:Sportista[])=>{
                                                    if(sportisti){
                                                      this.sviSportisti=sportisti;
                                                    }
                                                  })
                                                }
                                                else{
                                                  if (this.imeIPrezime && !this.drzava && this.sport && !this.disciplina && this.pol && !this.medalja){
                                                    this.sportistaServis.dohvPoImePolSport(this.imeIPrezime,this.pol,this.sport).subscribe((sportisti:Sportista[])=>{
                                                      if(sportisti){
                                                        this.sviSportisti=sportisti;
                                                      }
                                                    })
                                                  }
                                                  else{
                                                    if (this.imeIPrezime && !this.drzava && !this.sport && this.disciplina && this.pol && !this.medalja){
                                                      this.sportistaServis.dohvPoImePolDisiciplina(this.imeIPrezime,this.pol,this.disciplina).subscribe((sportisti:Sportista[])=>{
                                                        if(sportisti){
                                                          this.sviSportisti=sportisti;
                                                        }
                                                      })
                                                    }
                                                    else{
                                                      if (this.imeIPrezime && this.drzava && !this.sport && !this.disciplina && this.pol && !this.medalja){
                                                        this.sportistaServis.dohvPoImePolDrzava(this.imeIPrezime,this.pol,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                          if(sportisti){
                                                            this.sviSportisti=sportisti;
                                                          }
                                                        })
                                                      }
                                                      else{
                                                        if (this.imeIPrezime && !this.drzava && !this.sport && !this.disciplina && this.pol && this.medalja){
                                                          this.sportistaServis.dohvPoImePolMedalja(this.imeIPrezime,this.pol).subscribe((sportisti:Sportista[])=>{
                                                            if(sportisti){
                                                              this.sviSportisti=sportisti;
                                                            }
                                                          })
                                                        }
                                                        else{
                                                          if (!this.imeIPrezime && !this.drzava && this.sport && this.disciplina && this.pol && !this.medalja){
                                                            this.sportistaServis.dohvPolSportDisc(this.pol,this.sport,this.disciplina).subscribe((sportisti:Sportista[])=>{
                                                              if(sportisti){
                                                                this.sviSportisti=sportisti;
                                                              }
                                                            })
                                                          }
                                                          else{
                                                            if (!this.imeIPrezime && this.drzava && this.sport && !this.disciplina && this.pol && !this.medalja){
                                                              this.sportistaServis.dohvPolSportDrzava(this.pol,this.sport,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                if(sportisti){
                                                                  this.sviSportisti=sportisti;
                                                                }
                                                              })
                                                            }
                                                            else{
                                                              if (!this.imeIPrezime && !this.drzava && this.sport && !this.disciplina && this.pol && this.medalja){
                                                                this.sportistaServis.dohvPolSportMedalja(this.pol,this.sport).subscribe((sportisti:Sportista[])=>{
                                                                  if(sportisti){
                                                                    this.sviSportisti=sportisti;
                                                                  }
                                                                })
                                                              }
                                                              else{
                                                                if (!this.imeIPrezime && this.drzava && this.sport && this.disciplina && !this.pol && !this.medalja){
                                                                  this.sportistaServis.dohvSportDiscDrzava(this.sport,this.disciplina,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                    if(sportisti){
                                                                      this.sviSportisti=sportisti;
                                                                    }
                                                                  })
                                                                }
                                                                else{
                                                                  if (!this.imeIPrezime && !this.drzava && this.sport && this.disciplina && !this.pol && this.medalja){
                                                                    this.sportistaServis.dohvSportDiscMedalja(this.sport,this.disciplina).subscribe((sportisti:Sportista[])=>{
                                                                      if(sportisti){
                                                                        this.sviSportisti=sportisti;
                                                                      }
                                                                    })
                                                                  }
                                                                  else{
                                                                    if (!this.imeIPrezime && this.drzava && !this.sport && this.disciplina && !this.pol && this.medalja){
                                                                      this.sportistaServis.dohvDiscDrzavaMedalja(this.disciplina,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                        if(sportisti){
                                                                          this.sviSportisti=sportisti;
                                                                        }
                                                                      })
                                                                    }
                                                                    else{
                                                                      if (this.imeIPrezime && !this.drzava && this.sport && this.disciplina && this.pol && !this.medalja){
                                                                        this.sportistaServis.dohvImePolSportDisc(this.imeIPrezime,this.pol,this.sport,this.disciplina).subscribe((sportisti:Sportista[])=>{
                                                                          if(sportisti){
                                                                            this.sviSportisti=sportisti;
                                                                          }
                                                                        })
                                                                      }
                                                                      else{
                                                                        if (this.imeIPrezime && this.drzava && this.sport && !this.disciplina && this.pol && !this.medalja){
                                                                          this.sportistaServis.dohvImePolSportDrzava(this.imeIPrezime,this.pol,this.sport,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                            if(sportisti){
                                                                              this.sviSportisti=sportisti;
                                                                            }
                                                                          })
                                                                        }
                                                                        else{
                                                                          if (this.imeIPrezime && !this.drzava && this.sport && !this.disciplina && this.pol && this.medalja){
                                                                            this.sportistaServis.dohvImePolSportMedalja(this.imeIPrezime,this.pol,this.sport).subscribe((sportisti:Sportista[])=>{
                                                                              if(sportisti){
                                                                                this.sviSportisti=sportisti;
                                                                              }
                                                                            })
                                                                          }
                                                                          else{
                                                                            if (!this.imeIPrezime && this.drzava && this.sport && this.disciplina && this.pol && !this.medalja){
                                                                              this.sportistaServis.dohvPolSportDiscDrzava(this.pol,this.sport,this.disciplina,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                                if(sportisti){
                                                                                  this.sviSportisti=sportisti;
                                                                                }
                                                                              })
                                                                            }
                                                                            else{
                                                                              if (!this.imeIPrezime && !this.drzava && this.sport && this.disciplina && this.pol && this.medalja){
                                                                                this.sportistaServis.dohvPolSportDiscMedalja(this.pol,this.sport,this.disciplina).subscribe((sportisti:Sportista[])=>{
                                                                                  if(sportisti){
                                                                                    this.sviSportisti=sportisti;
                                                                                  }
                                                                                })
                                                                              }
                                                                              else{
                                                                                if (!this.imeIPrezime && this.drzava && this.sport && this.disciplina && !this.pol && this.medalja){
                                                                                  this.sportistaServis.dohvSportDiscDrzavaMedalja(this.sport,this.disciplina,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                                    if(sportisti){
                                                                                      this.sviSportisti=sportisti;
                                                                                    }
                                                                                  })
                                                                                }
                                                                                else{
                                                                                  if (this.imeIPrezime && this.drzava && this.sport && this.disciplina && this.pol && !this.medalja){
                                                                                    this.sportistaServis.dohvImePolSportDiscDrz(this.imeIPrezime,this.pol,this.sport,this.disciplina,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                                      if(sportisti){
                                                                                        this.sviSportisti=sportisti;
                                                                                      }
                                                                                    })
                                                                                  }
                                                                                  else{
                                                                                    if (this.imeIPrezime && !this.drzava && this.sport && this.disciplina && this.pol && this.medalja){
                                                                                      this.sportistaServis.dohvImePolSportDiscMedalja(this.imeIPrezime,this.pol,this.sport,this.disciplina).subscribe((sportisti:Sportista[])=>{
                                                                                        if(sportisti){
                                                                                          this.sviSportisti=sportisti;
                                                                                        }
                                                                                      })
                                                                                    }
                                                                                    else{
                                                                                      if (!this.imeIPrezime && this.drzava && this.sport && this.disciplina && this.pol && this.medalja){
                                                                                        this.sportistaServis.dohvPolSportDiscDrzavaMedalja(this.pol,this.sport,this.disciplina,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                                          if(sportisti){
                                                                                            this.sviSportisti=sportisti;
                                                                                          }
                                                                                        })
                                                                                      }
                                                                                      else{
                                                                                        if (this.imeIPrezime && this.drzava && this.sport && this.disciplina && this.pol && this.medalja){
                                                                                          this.sportistaServis.dohvPoSvim(this.imeIPrezime,this.pol,this.sport,this.disciplina,this.drzava).subscribe((sportisti:Sportista[])=>{
                                                                                            if(sportisti){
                                                                                              this.sviSportisti=sportisti;
                                                                                            }
                                                                                          })
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      this.s=true;
  }
}
