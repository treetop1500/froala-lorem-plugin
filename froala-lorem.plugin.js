/**
 * Created by Robert Wade on 9/2/16.
 */
// Define an icon.
$.FroalaEditor.DefineIcon('loremIcon', { NAME: 'rebel'})

// Define a dropdown button.
$.FroalaEditor.RegisterCommand('loremDropdown', {
    // Button title.
    title: 'Lorem Ipsum Insert',

    // Mark the button as a dropdown.
    type: 'dropdown',

    // Specify the icon for the button.
    // If this option is not specified, the button name will be used.
    icon: 'loremIcon',

    // Options for the dropdown.
    options: {
        "Lucas ipsum dolor sit amet jawa solo mace hutt skywalker maul organa organa sidious binks. Skywalker hutt ponda fisto skywalker darth. Mon padmé organa hutt tatooine luke mandalore aayla. Yoda wedge twilek darth. Zabrak jango jinn mon dantooine. Maul ben antilles kessel sith lando ewok. Mandalorians yoda calamari jinn skywalker. Moff moff antilles mon. Fisto yoda yavin kenobi ewok solo fett lando ahsoka. Dooku padmé aayla wicket droid utapau lobot antilles. Darth gamorrean c-3p0 watto darth. Obi-wan ahsoka yoda dantooine jinn bothan wookiee baba.<br/>Padmé windu mon darth jade organa zabrak secura darth. Skywalker leia antilles yavin palpatine lando ewok. Boba owen leia moff skywalker jabba leia. Binks organa ahsoka maul ahsoka. Grievous leia dooku darth mon darth boba solo. Mace wampa antilles gamorrean. Hutt dooku droid hutt boba darth darth yavin maul. Ben obi-wan calrissian bothan leia. Ackbar binks calrissian mara organa mon. Kamino biggs wedge lando. Kamino jar wookiee fett greedo wedge. Jabba yoda organa moff lars dooku mustafar. Dooku jade ben vader mon skywalker.<br/>Mandalorians qui-gonn luuke mace hutt watto aayla darth. Twilek ventress lobot jinn wicket hoth grievous. Darth dantooine han kessel antilles. Kessel solo darth sith watto wicket antilles. Gamorrean vader moff darth binks vader organa mon baba. Organa wicket hutt mon sidious. Calrissian ahsoka zabrak calrissian. Maul yoda hoth gonk dooku ahsoka. Bothan sidious dantooine yavin. Sebulba darth owen greedo. Skywalker antilles moff mara wampa skywalker. Chewbacca lars organa thrawn windu kessel coruscant jabba.<br/>Lando hutt alderaan darth organa calamari. Jawa lobot tatooine darth owen maul hutt skywalker. Fisto antilles darth hutt r2-d2 secura ackbar. Hutt mara mara kashyyyk. Organa mon solo ackbar jinn sith skywalker. Wedge fisto thrawn ben windu moff coruscant. Twilek windu wicket jade yoda dagobah moff twilek ben. Ben calrissian organa solo. Grievous luke darth jinn kit moff skywalker. Luke mace naboo darth watto mustafar. Calamari mon darth jabba moff c-3po solo utapau. Bothan darth gonk dagobah secura owen k-3po ahsoka vader.<br/>Dooku organa wookiee solo baba dantooine skywalker. Palpatine windu twilek yavin twilek. Ackbar mon dagobah skywalker. Grievous dagobah wampa dooku solo obi-wan utapau hoth skywalker. Jabba moff droid wedge antilles. Hutt skywalker bothan chewbacca antilles. Ahsoka c-3po darth r2-d2 dantooine coruscant dooku darth c-3po. Vader mandalorians obi-wan kessel wedge yoda. Darth moff padmé ackbar. Bespin kenobi antilles k-3po boba yavin dagobah qui-gon. Gamorrean kenobi wedge binks. Skywalker anakin mace darth skywalker solo anakin organa." : "Star Wars",
        "Bacon ipsum dolor amet capicola corned beef pig ham hock flank pastrami chuck tri-tip jowl short ribs kevin. Tenderloin kevin ball tip, tongue shank capicola chicken biltong cupim shankle. Turducken picanha ground round boudin, pork belly bresaola salami fatback tenderloin strip steak sausage pork loin short loin t-bone. Tri-tip capicola pastrami, brisket shankle leberkas pork loin pork chop tenderloin fatback.<br/>Ham hock t-bone beef prosciutto landjaeger turkey tail jerky filet mignon brisket shoulder sirloin bresaola drumstick salami. Beef ribs landjaeger jerky, turkey tri-tip kevin fatback andouille brisket tongue. Tail tri-tip swine sirloin turducken. Jerky t-bone doner, shank prosciutto filet mignon kevin fatback picanha rump. Ground round ham rump fatback. Biltong kielbasa turkey, prosciutto landjaeger ball tip pig spare ribs frankfurter pork chop pancetta brisket.<br/>Pastrami rump chuck alcatra pancetta bacon beef ribs. Ribeye ham boudin chicken sirloin, pork loin capicola doner sausage pancetta prosciutto turkey. Tri-tip alcatra hamburger shank, tongue capicola rump pancetta swine beef ribs meatball shoulder. Shank turducken capicola short loin, alcatra bacon biltong sirloin strip steak jerky ham. Prosciutto venison alcatra jerky swine hamburger chuck.<br/>Corned beef porchetta prosciutto cupim spare ribs jowl brisket. Bresaola tongue rump, pork belly tri-tip landjaeger venison alcatra chicken salami leberkas. Andouille chicken landjaeger pork belly cupim. Ham hock ground round pork belly, pig pork chop rump short loin fatback spare ribs kevin hamburger tenderloin. Bresaola andouille beef ribs, alcatra porchetta ribeye boudin ham hock filet mignon leberkas. Meatloaf pork tongue, frankfurter doner swine beef ribs brisket. Capicola boudin meatloaf pancetta turkey brisket rump.<br>Salami pork belly boudin chuck. Drumstick flank pastrami cupim meatball bresaola pork loin chuck pork chop short ribs alcatra pancetta kevin leberkas. Pork loin spare ribs porchetta, bresaola meatloaf sirloin jerky pastrami cupim shankle ribeye beef ribs fatback. Tail bacon beef ribs, tongue pancetta fatback drumstick jowl sirloin prosciutto tenderloin meatloaf landjaeger. Tail strip steak ham pork chop t-bone prosciutto shankle doner bacon alcatra sausage beef ribs. Pig porchetta biltong swine chuck ham." : "Bacon",
        "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.<br/>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?<br/>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. <br/>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.<br/>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb." : "Samuel L.",
        "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.<br/>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.<br/>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.<br/>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jÃ­cama salsify.<br/>Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard." : "Veggie",
        "If the Ipswich Ale living with the corona light hardly requires assistance from the wasted lover, then a Christmas Ale rejoices. Most people believe that a Keystone light living with the dude sanitizes a bud dry, but they need to remember how intoxicatedly a frightened broken bottle wakes up. Some pin ball machine finds lice on a crispy Luna Sea ESB. A St. Pauli Girl of a Hazed and Infused hibernates, and a vaporized freight train beams with joy; however, an Octoberfest over a Labatts hesitantly negotiates a prenuptial agreement with another psychotic Labatts. Most people believe that a dude about the bull ice satiates a King Henry near a broken bottle, but they need to remember how drunkenly the lover wakes up.<br/>Sometimes a Sam Adams behind a bull ice daydreams, but the hammered Mango Beer always reaches an understanding with a bud light toward a hops! A Wolverine Beer around a Hoptoberfest, the surly scooby snack, and the Bacardi Silver are what made America great! A Stella Artois from a bull ice plays pinochle with the Strohs, because a radioactive Mango Beer sanitizes the Brewers Reserve . A Sierra Nevada shares a shower with the Christmas Ale for the hops. Now and then, a secretly geosynchronous jersey cow gives a stink finger to a high porter.<br/>The bar tab inside a scooby snack intoxicatedly graduates from the power drill drink behind a Heineken. When a Rolling Rock ceases to exist, a Corona Extra reads a magazine. A blue moon near a Kashmir IPA pours freezing cold booze on a monkey bite. A self-actualized Left Hand Milk Stout is usually tattered.<br/>The green customer avoids contact with a pompous Hops Alligator Ale. For example, some Hefeweizen for the Ellis Island IPA indicates that a snooty wanker sanitizes the Sam Adams about a Citra Ninja. A pathetic crank case falls in love with the Harpoon toward a St. Pauli Girl. When you see a moldy mating ritual, it means that a skinny customer trembles. Indeed, a Coors living with a beer stumbly sells the Citra Ninja to a Hommel Bier related to some Harpoon.<br/>A shot eagerly requires assistance from a malt. For example, a knowingly smelly Keystone light indicates that a Sam Adams beyond a pin ball machine shares a shower with a coors light. If the Long Trail Ale related to a Heineken pours freezing cold booze on an Octoberfest, then the ESB related to a miller takes a coffee break. Now and then, a Hommel Bier toward the Ellis Island IPA stumbly dances with a mysterious blood clot. The Heineken tries to seduce another Dixie Beer about a crank case." : "Beer",
        "Lorem ipsum door sit amet, consectetur adipiscing elit. Vivamus vel mattis justo. Proin vitae viverra quam. Cras vel pulvinar mi. Morbi vulputate, odio ut euismod ullamcorper, nisl velit varius mauris, pellentesque venenatis dui urna quis elit. Donec vitae lectus at nibh posuere molestie. Pellentesque placerat efficitur malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi convallis ipsum nec luctus dapibus. Morbi non bibendum tortor, dapibus ultrices augue. Aliquam semper nunc a lobortis condimentum. Aliquam gravida varius aliquet. Donec rutrum tellus elit, at convallis est fermentum eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer elementum placerat sollicitudin.<br/>Praesent ac blandit lorem, ut tempus neque. Vestibulum mi ex, hendrerit bibendum dapibus at, elementum at arcu. Aliquam a enim sed metus tristique convallis. Praesent hendrerit sagittis congue. Aliquam ac eros nec felis luctus vehicula eget et eros. Nunc vel augue sit amet neque dignissim pellentesque vitae aliquet dui. Nulla nec maximus dolor. Maecenas a elementum turpis. Aenean vitae dapibus nibh. Nunc volutpat ligula ac pellentesque laoreet.<br/>Suspendisse sodales, odio vel aliquet mollis, nunc nunc fringilla justo, a facilisis sapien erat eget nisl. Nullam ut metus felis. Fusce laoreet et risus in tempor. Suspendisse interdum sit amet metus dignissim blandit. Mauris vehicula, augue eu feugiat congue, sem dolor aliquet libero, in laoreet leo arcu sit amet magna. Ut purus felis, sodales eleifend pellentesque a, accumsan et mauris. In consectetur suscipit mattis. Cras faucibus ultricies purus eget tempus. Vivamus eget metus dolor. Nam a quam in augue dignissim pharetra. Quisque non neque fermentum sem efficitur euismod. Aenean a erat ut tortor posuere gravida vel nec quam. Cras ultricies varius purus eu malesuada. In eleifend lacinia sapien, ut varius tellus aliquam in. Maecenas feugiat magna scelerisque sagittis interdum.<br/>Donec sodales commodo est, et interdum nibh efficitur ut. Suspendisse tempor turpis eget tellus dapibus vehicula. Duis eu imperdiet eros. Nulla facilisi. Ut est lorem, tincidunt nec elit quis, mattis semper lacus. Phasellus quis porttitor lacus. Fusce scelerisque euismod bibendum. Nam lorem enim, sollicitudin eu sem eget, pulvinar aliquet quam. Vivamus pretium convallis vestibulum. Nulla congue lectus ac pellentesque pulvinar. Vestibulum ut faucibus nibh, a vehicula quam. Proin imperdiet luctus sem, nec fermentum ligula sodales vel. Maecenas nec lacus suscipit, blandit magna sed, molestie purus. Etiam nec lectus pulvinar, sollicitudin ante aliquam, rutrum turpis. Nam ultrices mi sit amet ornare sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br/>Quisque bibendum neque et facilisis tincidunt. Integer sem lorem, tincidunt vel mollis non, commodo ac ipsum. Quisque commodo consectetur arcu, pretium finibus metus. Suspendisse sollicitudin facilisis justo ut dignissim. Cras in libero ac nibh vulputate mattis. Cras porttitor tincidunt eros, sit amet eleifend velit congue sed. Mauris faucibus laoreet eleifend. Morbi eu aliquam tellus. Sed at orci pellentesque, rutrum urna eu, feugiat urna. Nulla facilisi. Integer efficitur in ante quis aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam varius tortor nisi, id interdum orci euismod a. Donec viverra varius lacus et fringilla." : "Standard"
    },

    // If present, the options property will be ignored.
    // It can be used to define a custom HTML for the dropdown.
    //html: function () {
        // The current context is the editor instance.
    //    return '';
    //},

    // Save the dropdown action into undo stack.
    undo: true,

    // Focus inside the editor before callback.
    focus: true,

    // Refresh the button state after the callback.
    refreshAfterCallback: true,

    // Callback.
    callback: function (cmd, val, params) {
        // The current context is the editor instance.
        this.html.insert(val);
        this.undo.saveStep();
    },

    // Called when the dropdown button state might have changed.
    refresh: function ($btn) {
        // The current context is the editor instance.
        //console.log ($btn.selection);
    },

    // Called when the dropdown is shown.
    refreshOnShow: function ($btn, $dropdown) {
        // The current context is the editor instance.
        //console.log (this.selection.element());
    }
});