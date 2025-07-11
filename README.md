Angular Installation:
=====================
1) install NodeJS
    check: (in command prompt)
        node -v
        npm -v

2) Install angular
    npm install -g @angular/cli@15
    check: 
        ng version

3) Angular Application 
    --> move to the desired path/location
        cd Desktop
    --> ng new my-app
        routing-yes
        css

4) open and run application
    --> In cmd move to the folder and give "code ." command
    --> Open Terminal and run command "ng serve"

**) Enable Execution  Policy (for the first time only in the laptop)
    --> open powershell as administrator
    --> run command "set-ExecutionPolicy Unrestricted"




Git:
====
1) Git Installation
    check: git -v

2) link our GitHub account to our system
    git config --global user.name "XXXXXX"
    git config --global user.email "XXXXXXXX"
    check:
    git config --list

3) link project <--> Repository
    -> create a repository
    -> git init
    -> git remote add origin url
        check: git remote -v

    -> git add .
    -> git commit -m "commit message"
    -> git push
        ->git push --set-upstream origin master -f (for the 1st time)


Topics:
=======


Project Hierarchy:
==================












Data Binding:
=============






Directives: used to alter DOM
===========
1) Structural Directives
    *ngFor, *ngIf

2) Attribute Directives
    ngClass, ngStyle


Pipes: used to alter Data Format
======
 | uppercase
 | lowercase
 | date
 | date:'hh:mm:ss'


 Possible API Calls:
 ===================
1) get Details                 get             get(URL)
2) specific                    get             
3) filtering                   get             get(url?filter=term)
4) sorting                     get             get(url?sortBy=column&order=asc/desc)
5) pagination                  get             get(url?limit=items&page=page)

6) create                      post            post(url,data) 
7) update                      put             put(url/id,data)
8) delete                      delete          delete(url/id) 



Validators:
===========

ts:
===
name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])


html:
=====
    <div *ngIf="CONTROLS?.touched && CONTROLS?.invalid">
        <p *ngIf="CONTROLS?.errors?.['required']">Name should be enter</p>
        <p *ngIf="CONTROLS?.errors?.['minlength']">Name should be minimum 6 characters</p>
        <p *ngIf="CONTROLS?.errors?.['maxlength']">Name should be maximum 12 characters</p>
    </div>

CONTROLS:
=========
1) Form Group:  studentForm.get('name')
2) Nested Form Group:  studentForm.get('address')?.get('pin')
3) Form Array: cardsFormArray.controls[i]?.get('cvv')



Customs:
========
1) Custom Directives ---> ng generate directive capital
2) Custom Pipes ---> ng generate pipe rupee
3) Custom Data Types ---> ng generate interface user
4) Custom Validator
5) Custom API / Dummy JSON
6) Custom Command
7) Interceptor