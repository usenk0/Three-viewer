import nameGen from './name-generator'
import { getRandomInt, getRandomIntRange } from './int-random'
import uniqid from 'uniqid'

/**
 *  @param {number} rootCount
 *  @param {number} maxDepth
 *  @param {[number, number]} childCount
 */
export default function genTree(rootCount, maxDepth, childCount) {
    let rootLayer = genLayer(rootCount, childCount)
    let parentLayer = rootLayer

    for (let i = 1; i < maxDepth; i++) {
        let childNodes = layerCrawler(parentLayer)
        let globalChildLayer = layerReducer(childNodes, i + 1 !== maxDepth ? childCount : [0, 0])
        bindLayers(parentLayer, globalChildLayer)
        parentLayer = globalChildLayer.flat()
    }

    return rootLayer
}

function genLayer(nodeCount, childCount) {
    let layer = [];
    for (let i = 0; i < nodeCount; i++) {
        layer.push(new TreeNode(nameGen(), getRandomIntRange(childCount[0], childCount[1]), uniqid()))
    }
    return layer
}

/**
 * @param {TreeNode[]} layer массив узлов
 */
function layerCrawler(layer) {
    let childNodes = []
    for (let i = 0; i < layer.length; i++) {
        childNodes.push(layer[i].childCount)
    }
    return childNodes;
}

/**
 * @param {TreeNode[]} childNodes массив узлов
 */
function layerReducer(childNodes, childCount) {
    let globalChildLayer = []
    for (let i = 0; i < childNodes.length; i++) {
        globalChildLayer.push(genLayer(childNodes[i], childCount))
    }
    return globalChildLayer
}

function bindLayers(parentLayer, childLayer) {
    for (let i = 0; i < childLayer.length; i++) {
        parentLayer[i].children = childLayer[i]
    }
}

class TreeNode {
    constructor(name, childCount, id) {
        this.name = name
        this.id = id
        if (childCount) {
            this.childCount = childCount
            this.children = []
        }
    }
}