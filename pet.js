console.log("script running")


const feedButton = document.querySelector("#feedbutton")
const playButton = document.querySelector("#playbutton")
const walkButton = document.querySelector("#walkbutton")
const status = document.querySelector("#status")
const imageDiv = document.querySelector("#image-container")


let count = 0

feedButton.addEventListener('click', (e) =>{
  count += 1
  console.log(`Button pressed ${count} times.`)
  status.innerHTML = `You fed April and Bella ${count} times!`
  if (count > 5) {
    status.innerHTML = `Okay, no more feeding. We're full and tired`
    imageDiv.innerHTML = '<img src="image2.jpg" style="width:300px;height:400px;"/>'
  }
})

playButton.addEventListener('click', (e) =>{
  count += 1
  console.log(`Button pressed ${count} times.`)
  status.innerHTML = `You played with April and Bella ${count} times!`
  if (count > 5) {
    status.innerHTML = `Thank you for playing with us.`
    imageDiv.innerHTML = '<img src="image3.jpg" style="width:300px;height:400px;"/>'
  }
})

walkButton.addEventListener('click', (e) =>{
  count += 1
  console.log(`Button pressed ${count} times.`)
  status.innerHTML = `You walked April and Bella ${count} times!`
  if (count > 5) {
    status.innerHTML = `Thank you for taking us on a walk.`
    imageDiv.innerHTML = '<img src="image4.jpeg" style="width:500px;height:400px;"/>'
  }
})