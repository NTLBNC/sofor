var url = 'https://driveral.com/hu/api/jobs?uid=3e7ccfff-eab8-40b3-b055-98fbd40c2286&page=1&fbclid=IwAR2z-Y6kKb7GmmfhEr9-65aRUS15aQuBchZISQmOqgl5e8BNsVh8ejtE2no';

    $.getJSON(url, function(data){
        
    
      console.log(data.data);
       
        const container = document.createElement("div");
        console.log("add");
        container.classList.add("container");
        document.body.appendChild(container);
           
            const row = document.createElement("div");
            console.log("add-row");
            row.classList.add("row");
            row.classList.add("row");
            row.classList.add("align-items-center");
            container.appendChild(row);

          for (let i = 0; i < data.data.length; i++) {
            const col = document.createElement("div");
                    console.log("add-row");
                    col.classList.add("col-xl-4");
                    col.classList.add("col-lg-6");
                    col.classList.add("col-sm-12");
                    row.appendChild(col);

                        const card = document.createElement("div");
                        card.classList.add("card");
                        col.appendChild(card);

                          const  headimg = document.createElement("img");
                          headimg.classList.add("card-img-top") ;
                          headimg.setAttribute("src", data.data[i].company_image)
                          headimg.setAttribute("height", "110px")
                          card.appendChild(headimg);
                                
                              cardbody = document.createElement("div");
                              cardbody.classList.add("card-body");
                              card.appendChild(cardbody);

                                const cim = document.createElement("h5");
                                    cim.classList.add('card-title');
                                    cim.textContent ="Szükséges jogosítvány: " + data.data[i].license;
                                    cardbody.appendChild(cim);
            
                                const text = document.createElement("p");
                                    text.classList.add("card-text") ;
                                    text.textContent = data.data[i].title;
                                    cardbody.appendChild(text);

                                const ber = document.createElement("b");
                                    if(data.data[i] != "")
                                    {
                                      ber.textContent = data.data[i].payment;
                                      cardbody.appendChild(ber);
                                    }else {
                                      ber.textContent = "Nincs megadva bérsáv";
                                      cardbody.appendChild(ber);
                                     }
                                      
                                    

                                    const btn = document.createElement("a");
                                      btn.classList.add("btn");
                                      btn.classList.add("btn-primary");
                                      btn.setAttribute("href","https://soforallasok.com/jobs/bhs-trans-kft/belfoldi-flottabovites-c-e-kategoria-kiemelt-berezessel");
                                      btn.textContent ="Bővebben...";
                                      cardbody.appendChild(btn);
            
            
          }

                
    
    
    
            
    
    
    


    });


    

    
  
