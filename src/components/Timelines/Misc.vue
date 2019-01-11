<template>
<v-layout align-center column justify-center>
    <v-timeline>
        <v-timeline-item color="secondary" fill-dot right small>
            <v-card>
                <v-card-title class="primary">
                    <v-icon size="42" class="mr-3">
                        face
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">Number 2</h2>
                </v-card-title>
                <v-container>
                    <v-layout>
                        <v-flex xs10>
                            2006-2010 - A+ academy, Graduated valedictorian with a GPA of 3.9... to easy
                        </v-flex>
                        <v-flex xs2>
                            <v-icon size="64">laugh</v-icon>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-timeline-item>

        <v-timeline-item color="secondary" fill-dot left small>
            <v-card>
                <v-card-title class="primary justify-end">
                    <h2 class="display-1 mr-3 white--text font-weight-light">University</h2>
                    <v-icon dark size="42">school</v-icon>
                </v-card-title>
                <v-container>
                    <v-layout>
                        <v-flex>
                            2010-2014 - The University of Texas in Dallas, Not as easy lol. <br>
                            Took a little more dedication and effort to graduate from this great engineering school.
                            With a degree in Software Engineering.
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-timeline-item>

        <v-timeline-item color="secondary" fill-dot right small>
            <v-card>
                <v-card-title class="primary">
                    <v-icon dark size="42" class="mr-3">
                        work
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">Work <h6> (Non Career Oriented)</h6></h2>
                </v-card-title>
                <v-container>
                    <v-layout>
                        <v-flex xs10>
                            
                            2014-2015 - Blue Beacon Truck Wash, A full blown physical job,
                            were i started to earn a living for the first time in my life.
                            </v-flex>
                            <v-flex xs2>
                                <v-icon size="64">mdi-calendar-text</v-icon>
                            </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-timeline-item>

        <v-timeline-item color="secondary" fill-dot left small>
            <v-card>
                <v-card-title class="primary justify-end">
                    <h2 class="display-1 mr-3 white--text font-weight-light">Career Move</h2>
                    <v-icon dark size="42">flight_land</v-icon>
                </v-card-title>
                <v-container>
                    <v-layout>
                        <v-flex>
                            2015 - Moved to Indianapolis IN, for my first job using my Software Engineering degree.
                            2015-Present - Career at TCS, doing Development and Operations
                        </v-flex> 
                    </v-layout>
                </v-container>
            </v-card>
        </v-timeline-item>

        <v-timeline-item color="secondary" fill-dot right small>
            <v-card>
                <v-card-title class="primary">
                    <v-icon dark size="42" class="mr-3">
                        directions_run
                    </v-icon>
                    <h2 class="display-1 white--text font-weight-light">Future ..</h2>
                </v-card-title>
                <v-container>
                    <v-layout>
                        <v-flex xs10>
                            2019-Present TBD, Lets find Dr. Strange ask what the future holds :) 
                        </v-flex>
                        <v-flex xs2>
                            <v-icon size="64">mdi-calendar-text</v-icon>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</v-layout>
</template>

<script>
export default {
    name: 'misc',
    data() {
        return {
            //
        }
    }
}
</script>
