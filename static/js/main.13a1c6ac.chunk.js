(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var r=i(9),s=i.n(r),a=(i(16),i(8)),n=i(2),l=i(3),c=i(5),o=i(4),m=i(1),d=i.n(m),h=(i(17),i(11)),b=(i(18),i(19),i(0)),j=function(e){var t=e.title,i=e.description,r=e.imgUrl,s=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:r,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[i,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:s,children:"IMDB"})]})]})]})},u=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(j,Object(h.a)({},e),e.imdbId)}))})},p=i(7),g=i.n(p),v=(i(21),/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/),w=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(n.a)(this,i);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",isErrorImgUrl:!1,isErrorimdbUrl:!1,isDisabled:!1},e.resetForms=function(){e.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",isErrorImgUrl:!1,isErrorimdbUrl:!1,isDisabled:!1})},e.checkImgURl=function(){v.test(e.state.imgUrl)?e.setState({isErrorImgUrl:!1,isDisabled:!1}):e.setState({isErrorImgUrl:!0,isDisabled:!0})},e.checkImdbUrl=function(){v.test(e.state.imdbUrl)?e.setState({isErrorimdbUrl:!1,isDisabled:!1}):e.setState({isErrorimdbUrl:!0,isDisabled:!0})},e.checkMovie=function(){e.state.isErrorImgUrl||e.state.isErrorimdbUrl||(e.props.onAdd(e.state),e.resetForms())},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{className:"newMovie",method:"post",name:"form",onSubmit:function(t){t.preventDefault(),e.checkMovie()},children:[Object(b.jsx)("p",{className:"newMovie__invitation",children:"Put the form here"}),Object(b.jsx)("p",{className:"newMovie__name-form",children:"Movie title:"}),Object(b.jsx)("input",{className:"newMovie__title input",name:"title",placeholder:"Title",required:!0,value:this.state.title,onChange:function(t){e.setState({title:t.target.value})}}),Object(b.jsxs)("label",{className:"newMovie__description",children:[Object(b.jsx)("p",{className:"newMovie__name-form",children:"Description:"}),Object(b.jsx)("textarea",{className:"newMovie__description--text input",name:"description",placeholder:"...",value:this.state.description,onChange:function(t){e.setState({description:t.target.value})}})]}),Object(b.jsx)("p",{className:"newMovie__name-form",children:"Image Link:"}),Object(b.jsx)("input",{className:g()("newMovie__imgUrl","url",{"url--wrong":!0===this.state.isErrorImgUrl}),name:"imgUrl",placeholder:"https://m.media-amazon.com",required:!0,value:this.state.imgUrl,onChange:function(t){e.setState({imgUrl:t.target.value})},onBlur:this.checkImgURl}),Object(b.jsx)("div",{className:"newMovie__imgUrl url--error",children:this.state.isErrorImgUrl&&Object(b.jsx)("p",{className:"newMovie__imgUrl--error-text",children:"Incorrect URL"})}),Object(b.jsx)("p",{className:"newMovie__name-form",children:"Film Link:"}),Object(b.jsx)("input",{className:g()("newMovie__imdbUrl","url",{"url--wrong":!0===this.state.isErrorimdbUrl}),name:"imdbUrl",placeholder:"https://www.imdb.com",required:!0,value:this.state.imdbUrl,onChange:function(t){e.setState({imdbUrl:t.target.value})},onBlur:this.checkImdbUrl}),Object(b.jsx)("div",{className:"newMovie__imdbUrl url--error",children:this.state.isErrorimdbUrl&&Object(b.jsx)("p",{className:"newMovie__imdbUrl--error-text",children:"Incorrect URL"})}),Object(b.jsx)("p",{className:"newMovie__name-form",children:"ID record:"}),Object(b.jsx)("input",{className:"newMovie__imdbId input",name:"imdbId",placeholder:"tt0319262",required:!0,value:this.state.imdbId,onChange:function(t){e.setState({imdbId:t.target.value})}}),Object(b.jsx)("div",{className:"newMovie__imdbUrl--error",children:(this.state.isErrorimdbUrl||this.state.isErrorImgUrl)&&Object(b.jsx)("p",{className:"newMovie__imdbUrl--error-text",children:"Please, enter correct data"})}),Object(b.jsx)("button",{className:"newMovie__button",type:"submit",disabled:this.state.isDisabled,children:"ADD   MOVIE"})]})}}]),i}(m.Component),M=i(10),O=function(e){Object(c.a)(i,e);var t=Object(o.a)(i);function i(){var e;Object(n.a)(this,i);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={movies:Object(a.a)(M)},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(a.a)(e.movies),[t])}}))},e}return Object(l.a)(i,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(u,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(w,{onAdd:this.addMovie})})]})}}]),i}(d.a.Component);s.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.13a1c6ac.chunk.js.map