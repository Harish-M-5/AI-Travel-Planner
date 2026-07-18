const form = document.getElementById("travelForm");


form.addEventListener("submit", async function(event){

    event.preventDefault();


    const travelData = {

        destination:
        document.getElementById("destination").value,


        budget:
        Number(document.getElementById("budget").value),


        days:
        Number(document.getElementById("days").value),


        tripType:
        document.getElementById("tripType").value,


        travelMode:
        document.getElementById("travelMode").value

    };



    const resultBox = document.getElementById("result");



    // Loading UI

    resultBox.innerHTML = `

    <div class="loading">

        <div class="loader"></div>

        <h3>
        AI is creating your travel plan...
        </h3>

    </div>

    `;



    try{


    const response = await fetch(
        "http://127.0.0.1:8000/plan",
        {

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },


        body:JSON.stringify(travelData)

        });



    const data = await response.json();



    displayAIResult(data.travel_plan);



    }

    catch(error){


        resultBox.innerHTML = `

        <h3 class="error">
        ❌ Something went wrong. Please try again.
        </h3>

        `;


        console.log(error);

    }



});






function displayAIResult(text){


    // Remove markdown symbols

    let cleanText = text
        .replace(/[#*_`]/g,"")
        .replace(/\r/g,"")
        .replace(/\n\s*\n\s*\n/g,"\n\n")
        .trim();



    // Add emojis for sections

    cleanText = cleanText

    .replace(/Day[- ]?wise itinerary/gi,
        "🗓️ Day Wise Itinerary")

    .replace(/Budget breakdown/gi,
        "💰 Budget Breakdown")

    .replace(/Packing checklist/gi,
        "🎒 Packing Checklist")

    .replace(/Budget saving tips/gi,
        "💡 Budget Saving Tips")

    .replace(/Tourist attractions/gi,
        "📍 Tourist Attractions")

    .replace(/Food recommendations/gi,
        "🍽️ Food Recommendations")

    .replace(/Hotel name suggestions/gi,
        "🏨 Hotel Suggestions")

    .replace(/Travel suggestions/gi,
        "🚗 Travel Suggestions")

    .replace(/Weather advice/gi,
        "🌤️ Weather Advice")

    .replace(/Safety tips/gi,
        "🛡️ Safety Tips");




    // Split sections

    let sections = cleanText.split(
        /\n(?=\d+\.|🗓️|💰|🎒|💡|📍|🍽️|🏨|🚗|🌤️|🛡️)/
    );



    let output = "";



    sections.forEach((section)=>{


        if(section.trim()){


            let lines =
            section
            .trim()
            .split("\n")
            .filter(line=>line.trim());



            let title =
            lines.shift();



            output += `


            <div class="ai-card">


                <h3>
                    ${title}
                </h3>



                <div class="ai-grid">


                ${
                    lines.map(line=>`

                    <div class="ai-item">

                        ${line.trim()}

                    </div>

                    `).join("")
                }


                </div>



            </div>


            `;


        }


    });



    document.getElementById("result").innerHTML = output;


}