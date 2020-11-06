import Vertice from "./Vertice";
import Edge from "./Edge.js";

export default class Graph {
    vertices;
    edges;
    constructor() {
        this.vertices = [];
        this.edges = [];
    }

    addVertice(vertice) {
        if(vertice instanceof Vertice){
            this.vertices.push(vertice);
        }
    }

    addEdge(edge) {
        if(edge instanceof Edge){
            this.edges.push(edge);
        }
    }
    
    info() {
        console.log("Vertice: ", this.vertices);
        console.log("Edge: ", this.edges);
    }

    findNearestVertices(verticeName) {
        let foundEdges = this.edges.filter(function(edge){
            return (edge.a.data == verticeName) || (edge.b.verticeName);
        });

        let foundVertices = [];
        foundEdges.forEach(function(edge){
            if(edge.a == verticeName){
                foundVertices.push(edge.b);
            } else if(edge.b == verticeName){
                foundVertices.push(edge.a);
            }
            // foundVertices.push(edge.a, edge.b);
        });

        return foundVertices;
    }
}