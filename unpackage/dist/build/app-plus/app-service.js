var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-item'])
Z([[2,'+'],[1,'message'],[[7],[3,'id']]])
Z([[2,'=='],[[6],[[7],[3,'message']],[3,'user']],[1,'home']])
Z([[2,'=='],[[6],[[7],[3,'message']],[3,'user']],[1,'customer']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'m-input-view'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'clearable_']],[[2,'!'],[[7],[3,'displayable_']]]],[[6],[[7],[3,'value']],[3,'length']]])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'#666666'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'clear']]]]]]]]])
Z([3,'20'])
Z([3,'clear'])
Z([3,'1'])
Z([[7],[3,'displayable_']])
Z(z[2])
Z(z[3])
Z([[2,'?:'],[[7],[3,'showPassword']],[1,'#cccccc'],[1,'#666666']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'display']]]]]]]]])
Z(z[6])
Z([3,'eye'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pages-content data-v-53836494'])
Z([3,'__e'])
Z([3,'data-v-53836494'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'dynInfo']])
Z(z[5])
Z(z[2])
Z([3,'userInfo data-v-53836494'])
Z([[2,'&&'],[[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]]],[[2,'=='],[[7],[3,'following']],[1,false]]])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[1,'behaviour']]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]])
Z([3,'daily-seciton data-v-53836494'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,1]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,1]]])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,0]],[[2,'=='],[[6],[[7],[3,'item']],[3,'isOwn']],[1,0]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'following']],[1,0]])
Z([[7],[3,'showComment']])
Z([3,'ind'])
Z([3,'ite'])
Z([[7],[3,'commentInfo']])
Z(z[22])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'ite']],[3,'replyName']],[1,'']],[[2,'!='],[[6],[[7],[3,'ite']],[3,'replyContent']],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group data-v-160e5138'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-160e5138'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'name']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'酒吧名稱'])
Z([3,'text'])
Z([[6],[[7],[3,'barInfo']],[3,'name']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'phone']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'11'])
Z([3,'聯係電話'])
Z([3,'number'])
Z([[6],[[7],[3,'barInfo']],[3,'phone']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'location']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'詳細地址'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'location']])
Z([3,'3'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'intro']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'酒吧簡介'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'intro']])
Z([3,'4'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'username']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'申請人姓名'])
Z(z[6])
Z([[6],[[7],[3,'barInfo']],[3,'username']])
Z([3,'5'])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'userphone']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'barInfo']]]]]]]]]]])
Z([3,'申請人聯係方式'])
Z(z[15])
Z([[6],[[7],[3,'barInfo']],[3,'userphone']])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-column'])
Z([3,'index'])
Z([3,'message'])
Z([[7],[3,'messages']])
Z(z[1])
Z([3,'__l'])
Z([[7],[3,'index']])
Z([[7],[3,'message']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[5])
Z([3,'__e'])
Z(z[10])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^sendMessage']],[[4],[[5],[[4],[[5],[1,'getInputMessage']]]]]]]],[[4],[[5],[[5],[1,'^focus']],[[4],[[5],[[4],[[5],[1,'inputGetFocus']]]]]]]]])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pages-content data-v-4d214951'])
Z([[2,'=='],[[7],[3,'created']],[1,false]])
Z(z[1])
Z([[7],[3,'created']])
Z([3,'注冊送1000魔法原力'])
Z([[7],[3,'createImg']])
Z([3,'僅限前5萬名星球居民'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'pan-poster data-v-4d214951'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[1,'preview']]]]]]]]])
Z([3,'http://47.244.27.153/images/static/img/poster/poster.png'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listInfo']])
Z(z[0])
Z([3,'pan-list-ul _ul data-v-9e8b2028'])
Z([[2,'=='],[[7],[3,'labelList']],[1,'budget']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'labelList']],[1,'task']],[[2,'=='],[[7],[3,'index']],[1,0]]])
Z([[2,'=='],[[7],[3,'labelList']],[1,'task']])
Z([3,'data-v-9e8b2028'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'listInfo']])
Z(z[0])
Z([3,'focus-list-ul _ul data-v-413f6d9b'])
Z([[2,'=='],[[7],[3,'labelList']],[1,'budget']])
Z([[2,'&&'],[[2,'=='],[[7],[3,'labelList']],[1,'task']],[[2,'=='],[[7],[3,'index']],[1,0]]])
Z([[2,'=='],[[7],[3,'labelList']],[1,'task']])
Z([3,'data-v-413f6d9b'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'潘多拉星球歡迎您'])
Z([3,'1'])
Z([3,'input-group'])
Z(z[1])
Z([3,'__e'])
Z([3,'m-input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'使用手機號/郵箱登錄'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'2'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'請輸入密碼'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pages-content data-v-bee179c2'])
Z([3,'__e'])
Z([3,'vote data-v-bee179c2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'vote']],[[4],[[5],[[5],[1,'1']],[1,'$0']]]],[[4],[[5],[1,'voteList.status']]]]]]]]]]])
Z([[7],[3,'btnStatus']])
Z([3,'hover-primary'])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'iswell']],[1,1]],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'status']],[1,1]]])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'vote']],[[4],[[5],[[5],[1,'0']],[1,'$0']]]],[[4],[[5],[1,'voteList.status']]]]]]]]]]])
Z(z[4])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'iswell']],[1,0]],[[2,'=='],[[6],[[7],[3,'voteList']],[3,'status']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'eyeIcon data-v-115c9ad8'])
Z([[7],[3,'changColor']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'assetHidden']]]]]]]]])
Z([3,'20'])
Z([3,'eye'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'找回或修改密碼'])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'succ']],[1,false]])
Z([3,'input-group'])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'輸入注冊的郵箱/手機'])
Z([3,'text'])
Z([[7],[3,'account']])
Z([3,'2'])
Z(z[1])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'regCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6'])
Z([3,'輸入驗證碼'])
Z([3,'number'])
Z([[7],[3,'regCode']])
Z([3,'3'])
Z([[2,'=='],[[7],[3,'succ']],[1,true]])
Z(z[5])
Z(z[1])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6位數以上由字母和數字組成的密碼'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'4'])
Z(z[1])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'verifyPwd']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'確認您的密碼'])
Z(z[27])
Z([[7],[3,'verifyPwd']])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__l'])
Z([3,'移民潘多拉星球'])
Z([3,'1'])
Z([3,'input-group'])
Z(z[1])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'account']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([[7],[3,'regType']])
Z([[7],[3,'account']])
Z([3,'2'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'regCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6'])
Z([3,'輸入驗證碼'])
Z([3,'number'])
Z([[7],[3,'regCode']])
Z([3,'3'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'password']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'6位數以上由字母和數字組成的密碼'])
Z([3,'password'])
Z([[7],[3,'password']])
Z([3,'4'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'verifyPwd']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'確認您的密碼'])
Z(z[23])
Z([[7],[3,'verifyPwd']])
Z([3,'5'])
Z(z[1])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'inviteCode']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'邀請碼(選填)'])
Z([3,'text'])
Z([[7],[3,'inviteCode']])
Z(z[14])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'input-group'])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'name']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z([3,'text'])
Z([[6],[[7],[3,'userInfo']],[3,'name']])
Z([3,'1'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'stature']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z([3,'3'])
Z([3,'number'])
Z([[6],[[7],[3,'userInfo']],[3,'stature']])
Z([3,'2'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'weight']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[10])
Z(z[11])
Z([[6],[[7],[3,'userInfo']],[3,'weight']])
Z(z[10])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'age']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[11])
Z([[6],[[7],[3,'userInfo']],[3,'age']])
Z([3,'4'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'site']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[4])
Z([[6],[[7],[3,'userInfo']],[3,'site']])
Z([3,'5'])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'^input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'signature']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'userInfo']]]]]]]]]]])
Z(z[4])
Z([[6],[[7],[3,'userInfo']],[3,'signature']])
Z([3,'6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/barrage.wxml','./components/im-chat/chatinput.wxml','./components/im-chat/messageshow.wxml','./components/logo.wxml','./components/m-icon/m-icon.wxml','./components/m-input.wxml','./components/wm-poster/wm-poster.wxml','./pages/auth/auth.wxml','./pages/base/base.wxml','./pages/daily/daily.wxml','./pages/daily/publish.wxml','./pages/daily/userInfo.wxml','./pages/entertain/entertain.wxml','./pages/entertain/entertainApplication.wxml','./pages/entertain/entertainDetail.wxml','./pages/entertain/entertainUpload.wxml','./pages/game/game.wxml','./pages/im-chat/im-chat.wxml','./pages/index/index.wxml','./pages/invite/invite.wxml','./pages/ledger/asset.wxml','./pages/ledger/focus.wxml','./pages/login/login.wxml','./pages/main/main.wxml','./pages/msg/msg.wxml','./pages/nearby/nearby.wxml','./pages/pact/pact.wxml','./pages/pact/pactVoteDetail.wxml','./pages/pan/donateList.wxml','./pages/pan/pan.wxml','./pages/passport/passport.wxml','./pages/purse/purse.wxml','./pages/pwd/pwd.wxml','./pages/reg/reg.wxml','./pages/setting/setting.wxml','./pages/store/store.wxml','./pages/strategy/strategy.wxml','./pages/user/update.wxml','./pages/user/user.wxml','./pages/welfare/welfare.wxml','./pagesA/settingChat/settingChat.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=_mz(z,'view',['class',0,'id',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,2,e,s,gg)){fE.wxVkey=1
}
var cF=_v()
_(oD,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
}
fE.wxXCkey=1
cF.wxXCkey=1
_(r,oD)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oJ=_n('view')
_rz(z,oJ,'class',0,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,1,e,s,gg)){lK.wxVkey=1
var tM=_mz(z,'m-icon',['bind:__l',2,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(lK,tM)
}
var aL=_v()
_(oJ,aL)
if(_oz(z,9,e,s,gg)){aL.wxVkey=1
var eN=_mz(z,'m-icon',['bind:__l',10,'bind:click',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(aL,eN)
}
lK.wxXCkey=1
lK.wxXCkey=3
aL.wxXCkey=1
aL.wxXCkey=3
_(r,oJ)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var fS=_n('view')
_rz(z,fS,'class',0,e,s,gg)
var hU=_mz(z,'swiper',['bindchange',1,'class',1,'data-event-opts',2,'vertical',3],[],e,s,gg)
var oV=_v()
_(hU,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_n('swiper-item')
_rz(z,e2,'class',9,lY,oX,gg)
var b3=_n('view')
_rz(z,b3,'class',10,lY,oX,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,11,lY,oX,gg)){o4.wxVkey=1
}
var x5=_mz(z,'view',['catchchange',12,'class',1,'data-event-opts',2],[],lY,oX,gg)
var o6=_v()
_(x5,o6)
if(_oz(z,15,lY,oX,gg)){o6.wxVkey=1
}
o6.wxXCkey=1
_(b3,x5)
o4.wxXCkey=1
_(e2,b3)
var f7=_n('view')
_rz(z,f7,'class',16,lY,oX,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,17,lY,oX,gg)){c8.wxVkey=1
}
else{c8.wxVkey=2
var h9=_v()
_(c8,h9)
if(_oz(z,18,lY,oX,gg)){h9.wxVkey=1
}
else{h9.wxVkey=2
var o0=_v()
_(h9,o0)
if(_oz(z,19,lY,oX,gg)){o0.wxVkey=1
}
else{o0.wxVkey=2
var cAB=_v()
_(o0,cAB)
if(_oz(z,20,lY,oX,gg)){cAB.wxVkey=1
}
cAB.wxXCkey=1
}
o0.wxXCkey=1
}
h9.wxXCkey=1
}
c8.wxXCkey=1
_(e2,f7)
_(aZ,e2)
return aZ
}
oV.wxXCkey=2
_2z(z,7,cW,e,s,gg,oV,'item','index','index')
_(fS,hU)
var cT=_v()
_(fS,cT)
if(_oz(z,21,e,s,gg)){cT.wxVkey=1
var oBB=_v()
_(cT,oBB)
var lCB=function(tEB,aDB,eFB,gg){
var oHB=_v()
_(eFB,oHB)
if(_oz(z,26,tEB,aDB,gg)){oHB.wxVkey=1
}
oHB.wxXCkey=1
return eFB
}
oBB.wxXCkey=2
_2z(z,24,lCB,e,s,gg,oBB,'ite','ind','ind')
}
cT.wxXCkey=1
_(r,fS)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var hMB=_n('view')
_rz(z,hMB,'class',0,e,s,gg)
var oNB=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',1,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(hMB,oNB)
var cOB=_mz(z,'m-input',['clearable',-1,'bind:__l',9,'bind:input',1,'class',2,'data-event-opts',3,'maxlength',4,'placeholder',5,'type',6,'value',7,'vueId',8],[],e,s,gg)
_(hMB,cOB)
var oPB=_mz(z,'m-input',['clearable',-1,'bind:__l',18,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(hMB,oPB)
var lQB=_mz(z,'m-input',['clearable',-1,'bind:__l',26,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(hMB,lQB)
var aRB=_mz(z,'m-input',['clearable',-1,'bind:__l',34,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(hMB,aRB)
var tSB=_mz(z,'m-input',['clearable',-1,'bind:__l',42,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(hMB,tSB)
_(r,hMB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oXB=_n('view')
_rz(z,oXB,'class',0,e,s,gg)
var fYB=_v()
_(oXB,fYB)
var cZB=function(o2B,h1B,c3B,gg){
var l5B=_mz(z,'message-show',['bind:__l',5,'id',1,'message',2,'vueId',3],[],o2B,h1B,gg)
_(c3B,l5B)
return c3B
}
fYB.wxXCkey=4
_2z(z,3,cZB,e,s,gg,fYB,'message','index','index')
var a6B=_mz(z,'chat-input',['bind:__l',9,'bind:focus',1,'bind:sendMessage',2,'data-event-opts',3,'vueId',4],[],e,s,gg)
_(oXB,a6B)
_(r,oXB)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var b9B=_n('view')
_rz(z,b9B,'class',0,e,s,gg)
var o0B=_v()
_(b9B,o0B)
if(_oz(z,1,e,s,gg)){o0B.wxVkey=1
}
var xAC=_v()
_(b9B,xAC)
if(_oz(z,2,e,s,gg)){xAC.wxVkey=1
}
var oBC=_v()
_(b9B,oBC)
if(_oz(z,3,e,s,gg)){oBC.wxVkey=1
var fCC=_mz(z,'wm-poster',['PriceTxt',4,'QrSrc',1,'Title',2,'bind:__l',3,'bind:tap',4,'class',5,'data-event-opts',6,'imgSrc',7,'vueId',8],[],e,s,gg)
_(oBC,fCC)
}
o0B.wxXCkey=1
xAC.wxXCkey=1
oBC.wxXCkey=1
oBC.wxXCkey=3
_(r,b9B)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var hEC=_v()
_(r,hEC)
var oFC=function(oHC,cGC,lIC,gg){
var tKC=_n('view')
_rz(z,tKC,'class',4,oHC,cGC,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,5,oHC,cGC,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(tKC,bMC)
if(_oz(z,6,oHC,cGC,gg)){bMC.wxVkey=1
}
var oNC=_v()
_(tKC,oNC)
if(_oz(z,7,oHC,cGC,gg)){oNC.wxVkey=1
var xOC=_n('view')
_rz(z,xOC,'class',8,oHC,cGC,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,9,oHC,cGC,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(xOC,fQC)
if(_oz(z,10,oHC,cGC,gg)){fQC.wxVkey=1
}
oPC.wxXCkey=1
fQC.wxXCkey=1
_(oNC,xOC)
}
eLC.wxXCkey=1
bMC.wxXCkey=1
oNC.wxXCkey=1
_(lIC,tKC)
return lIC
}
hEC.wxXCkey=2
_2z(z,2,oFC,e,s,gg,hEC,'item','index','index')
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var hSC=_v()
_(r,hSC)
var oTC=function(oVC,cUC,lWC,gg){
var tYC=_n('view')
_rz(z,tYC,'class',4,oVC,cUC,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,5,oVC,cUC,gg)){eZC.wxVkey=1
}
var b1C=_v()
_(tYC,b1C)
if(_oz(z,6,oVC,cUC,gg)){b1C.wxVkey=1
}
var o2C=_v()
_(tYC,o2C)
if(_oz(z,7,oVC,cUC,gg)){o2C.wxVkey=1
var x3C=_n('view')
_rz(z,x3C,'class',8,oVC,cUC,gg)
var o4C=_v()
_(x3C,o4C)
if(_oz(z,9,oVC,cUC,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(x3C,f5C)
if(_oz(z,10,oVC,cUC,gg)){f5C.wxVkey=1
}
o4C.wxXCkey=1
f5C.wxXCkey=1
_(o2C,x3C)
}
eZC.wxXCkey=1
b1C.wxXCkey=1
o2C.wxXCkey=1
_(lWC,tYC)
return lWC
}
hSC.wxXCkey=2
_2z(z,2,oTC,e,s,gg,hSC,'item','index','index')
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var h7C=_n('view')
_rz(z,h7C,'class',0,e,s,gg)
var o8C=_mz(z,'logo',['bind:__l',1,'slogan',1,'vueId',2],[],e,s,gg)
_(h7C,o8C)
var c9C=_n('view')
_rz(z,c9C,'class',4,e,s,gg)
var o0C=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',5,'bind:input',1,'class',2,'data-event-opts',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(c9C,o0C)
var lAD=_mz(z,'m-input',['displayable',-1,'bind:__l',13,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(c9C,lAD)
_(h7C,c9C)
_(r,h7C)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var xGD=_n('view')
_rz(z,xGD,'class',0,e,s,gg)
var oHD=_mz(z,'button',['bindtap',1,'class',1,'data-event-opts',2,'disabled',3,'hoverClass',4],[],e,s,gg)
var fID=_v()
_(oHD,fID)
if(_oz(z,6,e,s,gg)){fID.wxVkey=1
}
fID.wxXCkey=1
_(xGD,oHD)
var cJD=_mz(z,'button',['bindtap',7,'class',1,'data-event-opts',2,'disabled',3],[],e,s,gg)
var hKD=_v()
_(cJD,hKD)
if(_oz(z,11,e,s,gg)){hKD.wxVkey=1
}
hKD.wxXCkey=1
_(xGD,cJD)
_(r,xGD)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oND=_mz(z,'m-icon',['bind:__l',0,'bind:click',1,'class',1,'color',2,'data-event-opts',3,'size',4,'type',5,'vueId',6],[],e,s,gg)
_(r,oND)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var eRD=_n('view')
_rz(z,eRD,'class',0,e,s,gg)
var xUD=_mz(z,'logo',['bind:__l',1,'slogan',1,'vueId',2],[],e,s,gg)
_(eRD,xUD)
var bSD=_v()
_(eRD,bSD)
if(_oz(z,4,e,s,gg)){bSD.wxVkey=1
var oVD=_n('view')
_rz(z,oVD,'class',5,e,s,gg)
var fWD=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',6,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(oVD,fWD)
var cXD=_mz(z,'m-input',['clearable',-1,'bind:__l',13,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(oVD,cXD)
_(bSD,oVD)
}
var oTD=_v()
_(eRD,oTD)
if(_oz(z,21,e,s,gg)){oTD.wxVkey=1
var hYD=_n('view')
_rz(z,hYD,'class',22,e,s,gg)
var oZD=_mz(z,'m-input',['displayable',-1,'bind:__l',23,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(hYD,oZD)
var c1D=_mz(z,'m-input',['displayable',-1,'bind:__l',30,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(hYD,c1D)
_(oTD,hYD)
}
bSD.wxXCkey=1
bSD.wxXCkey=3
oTD.wxXCkey=1
oTD.wxXCkey=3
_(r,eRD)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var l3D=_n('view')
_rz(z,l3D,'class',0,e,s,gg)
var a4D=_mz(z,'logo',['bind:__l',1,'slogan',1,'vueId',2],[],e,s,gg)
_(l3D,a4D)
var t5D=_n('view')
_rz(z,t5D,'class',4,e,s,gg)
var e6D=_mz(z,'m-input',['clearable',-1,'bind:__l',5,'bind:input',1,'data-event-opts',2,'placeholder',3,'value',4,'vueId',5],[],e,s,gg)
_(t5D,e6D)
var b7D=_mz(z,'m-input',['clearable',-1,'bind:__l',11,'bind:input',1,'data-event-opts',2,'maxlength',3,'placeholder',4,'type',5,'value',6,'vueId',7],[],e,s,gg)
_(t5D,b7D)
var o8D=_mz(z,'m-input',['displayable',-1,'bind:__l',19,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(t5D,o8D)
var x9D=_mz(z,'m-input',['displayable',-1,'bind:__l',26,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(t5D,x9D)
var o0D=_mz(z,'m-input',['clearable',-1,'bind:__l',33,'bind:input',1,'data-event-opts',2,'placeholder',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(t5D,o0D)
_(l3D,t5D)
_(r,l3D)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var cEE=_n('view')
_rz(z,cEE,'class',0,e,s,gg)
var oFE=_mz(z,'m-input',['focus',-1,'clearable',-1,'bind:__l',1,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(cEE,oFE)
var lGE=_mz(z,'m-input',['clearable',-1,'bind:__l',7,'bind:input',1,'data-event-opts',2,'maxlength',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(cEE,lGE)
var aHE=_mz(z,'m-input',['clearable',-1,'bind:__l',14,'bind:input',1,'data-event-opts',2,'maxlength',3,'type',4,'value',5,'vueId',6],[],e,s,gg)
_(cEE,aHE)
var tIE=_mz(z,'m-input',['clearable',-1,'bind:__l',21,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(cEE,tIE)
var eJE=_mz(z,'m-input',['clearable',-1,'bind:__l',27,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(cEE,eJE)
var bKE=_mz(z,'m-input',['clearable',-1,'bind:__l',33,'bind:input',1,'data-event-opts',2,'type',3,'value',4,'vueId',5],[],e,s,gg)
_(cEE,bKE)
_(r,cEE)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/login/login","pages/reg/reg","pages/pwd/pwd","pages/im-chat/im-chat","pages/main/main","pages/pact/pact","pages/pact/pactVoteDetail","pages/daily/daily","pages/daily/publish","pages/daily/userInfo","pages/store/store","pages/game/game","pages/nearby/nearby","pages/entertain/entertain","pages/entertain/entertainDetail","pages/entertain/entertainApplication","pages/entertain/entertainUpload","pages/user/user","pages/user/update","pages/msg/msg","pages/pan/pan","pages/pan/donateList","pages/ledger/asset","pages/ledger/focus","pages/purse/purse","pages/passport/passport","pages/auth/auth","pages/invite/invite","pages/base/base","pages/strategy/strategy","pages/welfare/welfare","pages/setting/setting","pagesA/settingChat/settingChat"],"subPackages":[],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#000000","backgroundColor":"#fbf9fe"},"tabBar":{"color":"#767676","selectedColor":"#EFEFF4","backgroundColor":"#000000","list":[{"pagePath":"pages/main/main","text":"首頁","iconPath":"static/img/tabbar/home.png","selectedIconPath":"static/img/tabbar/homeHL.png"},{"pagePath":"pages/msg/msg","text":"通訊","iconPath":"static/img/tabbar/msg.png","selectedIconPath":"static/img/tabbar/msgHL.png"},{"pagePath":"pages/pan/pan","text":"PAN","iconPath":"static/img/tabbar/PAN.png","selectedIconPath":"static/img/tabbar/PANHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/tabbar/user.png","selectedIconPath":"static/img/tabbar/userHL.png"}]},"networkTimeout":{"request":6000,"uploadFile":10000},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"PandlaApp","compilerVersion":"2.0.0","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/barrage.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/barrage.wxml']=$gwx('./components/barrage.wxml');

__wxAppCode__['components/im-chat/chatinput.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/im-chat/chatinput.wxml']=$gwx('./components/im-chat/chatinput.wxml');

__wxAppCode__['components/im-chat/messageshow.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/im-chat/messageshow.wxml']=$gwx('./components/im-chat/messageshow.wxml');

__wxAppCode__['components/logo.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/logo.wxml']=$gwx('./components/logo.wxml');

__wxAppCode__['components/m-icon/m-icon.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/m-icon/m-icon.wxml']=$gwx('./components/m-icon/m-icon.wxml');

__wxAppCode__['components/m-input.json']={"usingComponents":{"m-icon":"/components/m-icon/m-icon"},"component":true};
__wxAppCode__['components/m-input.wxml']=$gwx('./components/m-input.wxml');

__wxAppCode__['components/wm-poster/wm-poster.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/wm-poster/wm-poster.wxml']=$gwx('./components/wm-poster/wm-poster.wxml');

__wxAppCode__['pages/auth/auth.json']={"navigationBarTitleText":"實名認證","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/auth/auth.wxml']=$gwx('./pages/auth/auth.wxml');

__wxAppCode__['pages/base/base.json']={"navigationBarTitleText":"星球基地","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/base/base.wxml']=$gwx('./pages/base/base.wxml');

__wxAppCode__['pages/daily/daily.json']={"enablePullDownRefresh":true,"navigationBarTitleText":"","titleNView":false,"bounce":"none","usingComponents":{"barrage":"/components/barrage"}};
__wxAppCode__['pages/daily/daily.wxml']=$gwx('./pages/daily/daily.wxml');

__wxAppCode__['pages/daily/publish.json']={"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"發表","fontSize":"35upx"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/daily/publish.wxml']=$gwx('./pages/daily/publish.wxml');

__wxAppCode__['pages/daily/userInfo.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/daily/userInfo.wxml']=$gwx('./pages/daily/userInfo.wxml');

__wxAppCode__['pages/entertain/entertain.json']={"navigationBarTitleText":"位置 | 活動","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/entertain/entertain.wxml']=$gwx('./pages/entertain/entertain.wxml');

__wxAppCode__['pages/entertain/entertainApplication.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input"}};
__wxAppCode__['pages/entertain/entertainApplication.wxml']=$gwx('./pages/entertain/entertainApplication.wxml');

__wxAppCode__['pages/entertain/entertainDetail.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/entertain/entertainDetail.wxml']=$gwx('./pages/entertain/entertainDetail.wxml');

__wxAppCode__['pages/entertain/entertainUpload.json']={"navigationBarTitleText":"","titleNView":{"buttons":[{"text":"提交","fontSize":"35upx"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/entertain/entertainUpload.wxml']=$gwx('./pages/entertain/entertainUpload.wxml');

__wxAppCode__['pages/game/game.json']={"navigationBarTitleText":"星球游戲","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/game/game.wxml']=$gwx('./pages/game/game.wxml');

__wxAppCode__['pages/im-chat/im-chat.json']={"navigationBarTitleText":"聊天","bounce":"none","usingComponents":{"chat-input":"/components/im-chat/chatinput","message-show":"/components/im-chat/messageshow"}};
__wxAppCode__['pages/im-chat/im-chat.wxml']=$gwx('./pages/im-chat/im-chat.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/invite/invite.json']={"navigationBarTitleText":"我的專屬邀請碼","bounce":"none","usingComponents":{"wm-poster":"/components/wm-poster/wm-poster"}};
__wxAppCode__['pages/invite/invite.wxml']=$gwx('./pages/invite/invite.wxml');

__wxAppCode__['pages/ledger/asset.json']={"navigationBarTitleText":"PAN幣賬本","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/ledger/asset.wxml']=$gwx('./pages/ledger/asset.wxml');

__wxAppCode__['pages/ledger/focus.json']={"navigationBarTitleText":"原力賬本","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/ledger/focus.wxml']=$gwx('./pages/ledger/focus.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/main/main.json']={"navigationBarTitleText":"","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/msg/msg.json']={"navigationBarTitleText":"通讯","navigationBarBackgroundColor":"#E1E1E1","navigationBarTextStyle":"black","titleNView":{"buttons":[{"text":"","fontSrc":"https://at.alicdn.com/t/font_1258335_6h11trbb733.ttf","fontSize":"22px","color":"#999999"}]},"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/msg/msg.wxml']=$gwx('./pages/msg/msg.wxml');

__wxAppCode__['pages/nearby/nearby.json']={"navigationBarTitleText":"附近居民","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/nearby/nearby.wxml']=$gwx('./pages/nearby/nearby.wxml');

__wxAppCode__['pages/pact/pact.json']={"navigationBarTitleText":"星球公約","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/pact/pact.wxml']=$gwx('./pages/pact/pact.wxml');

__wxAppCode__['pages/pact/pactVoteDetail.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/pact/pactVoteDetail.wxml']=$gwx('./pages/pact/pactVoteDetail.wxml');

__wxAppCode__['pages/pan/donateList.json']={"navigationBarTitleText":"捐贈榜單","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/pan/donateList.wxml']=$gwx('./pages/pan/donateList.wxml');

__wxAppCode__['pages/pan/pan.json']={"navigationBarTitleText":"","titleNView":false,"bounce":"none","usingComponents":{"m-icon":"/components/m-icon/m-icon"}};
__wxAppCode__['pages/pan/pan.wxml']=$gwx('./pages/pan/pan.wxml');

__wxAppCode__['pages/passport/passport.json']={"navigationBarTitleText":"星球護照","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/passport/passport.wxml']=$gwx('./pages/passport/passport.wxml');

__wxAppCode__['pages/purse/purse.json']={"navigationBarTitleText":"我的錢包","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/purse/purse.wxml']=$gwx('./pages/purse/purse.wxml');

__wxAppCode__['pages/pwd/pwd.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/pwd/pwd.wxml']=$gwx('./pages/pwd/pwd.wxml');

__wxAppCode__['pages/reg/reg.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/reg/reg.wxml']=$gwx('./pages/reg/reg.wxml');

__wxAppCode__['pages/setting/setting.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/setting/setting.wxml']=$gwx('./pages/setting/setting.wxml');

__wxAppCode__['pages/store/store.json']={"navigationBarTitleText":"星球特供","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/store/store.wxml']=$gwx('./pages/store/store.wxml');

__wxAppCode__['pages/strategy/strategy.json']={"navigationBarTitleText":"星球攻略","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/strategy/strategy.wxml']=$gwx('./pages/strategy/strategy.wxml');

__wxAppCode__['pages/user/update.json']={"navigationBarTitleText":"","bounce":"none","usingComponents":{"m-input":"/components/m-input","logo":"/components/logo"}};
__wxAppCode__['pages/user/update.wxml']=$gwx('./pages/user/update.wxml');

__wxAppCode__['pages/user/user.json']={"navigationBarTitleText":"","titleNView":false,"bounce":"none","usingComponents":{}};
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/welfare/welfare.json']={"navigationBarTitleText":"星球公益","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/welfare/welfare.wxml']=$gwx('./pages/welfare/welfare.wxml');

__wxAppCode__['pagesA/settingChat/settingChat.json']={"navigationBarTitleText":"提醒设置","navigationBarBackgroundColor":"#E1E1E1","navigationBarTextStyle":"black","titleNView":{},"usingComponents":{}};
__wxAppCode__['pagesA/settingChat/settingChat.wxml']=$gwx('./pagesA/settingChat/settingChat.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"165f":function(n,t,o){},"1ff7":function(n,t,o){},"21a8":function(n,t,o){"use strict";var e=o("165f"),u=o.n(e);u.a},"3e6e":function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={onLaunch:function(){console.log("App Launch"," at App.vue:4")},onShow:function(){console.log("App Show"," at App.vue:7")},onHide:function(){console.log("App Hide"," at App.vue:10")},mounted:function(){this.$request.interceptors.response(function(n){return console.log("res",n," at App.vue:14"),n&&(n.data.status&&n.data.status.code,n.statusCode,401==n.statusCode&&console.log("token失效"," at App.vue:31")),n})}};t.default=e},9344:function(n,t,o){"use strict";var e=o("1ff7"),u=o.n(e);u.a},b058:function(n,t,o){"use strict";o.r(t);var e=o("3e6e"),u=o.n(e);for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);t["default"]=u.a},eabc:function(n,t,o){"use strict";o.r(t);var e=o("b058");for(var u in e)"default"!==u&&function(n){o.d(t,n,function(){return e[n]})}(u);o("21a8"),o("9344");var a,c,s=o("2877"),f=Object(s["a"])(e["default"],a,c,!1,null,null,null);t["default"]=f.exports}},[["f230","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var o, r, i = t[0], s = t[1], u = t[2], m = 0, p = []; m < i.length; m++) {
      r = i[m], a[r] && p.push(a[r][0]), a[r] = 0;
    }

    for (o in s) {
      Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    }

    l && l(t);

    while (p.length) {
      p.shift()();
    }

    return c.push.apply(c, u || []), n();
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], o = !0, r = 1; r < n.length; r++) {
        var i = n[r];
        0 !== a[i] && (o = !1);
      }

      o && (c.splice(t--, 1), e = s(s.s = n[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      c = [];

  function i(e) {
    return s.p + "" + e + ".js";
  }

  function s(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports;
  }

  s.e = function (e) {
    var t = [],
        n = {
      "components/logo": 1,
      "components/m-input": 1,
      "components/im-chat/chatinput": 1,
      "components/im-chat/messageshow": 1,
      "components/barrage": 1,
      "components/m-icon/m-icon": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
      for (var o = ({
        "components/logo": "components/logo",
        "components/m-input": "components/m-input",
        "components/im-chat/chatinput": "components/im-chat/chatinput",
        "components/im-chat/messageshow": "components/im-chat/messageshow",
        "components/barrage": "components/barrage",
        "components/m-icon/m-icon": "components/m-icon/m-icon",
        "components/wm-poster/wm-poster": "components/wm-poster/wm-poster"
      }[e] || e) + ".wxss", a = s.p + o, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) {
        var u = c[i],
            m = u.getAttribute("data-href") || u.getAttribute("href");
        if ("stylesheet" === u.rel && (m === o || m === a)) return t();
      }

      var p = document.getElementsByTagName("style");

      for (i = 0; i < p.length; i++) {
        u = p[i], m = u.getAttribute("data-href");
        if (m === o || m === a) return t();
      }

      var l = document.createElement("link");
      l.rel = "stylesheet", l.type = "text/css", l.onload = t, l.onerror = function (t) {
        var o = t && t.target && t.target.src || a,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        c.request = o, delete r[e], l.parentNode.removeChild(l), n(c);
      }, l.href = a;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(l);
    }).then(function () {
      r[e] = 0;
    }));
    var o = a[e];
    if (0 !== o) if (o) t.push(o[2]);else {
      var c = new Promise(function (t, n) {
        o = a[e] = [t, n];
      });
      t.push(o[2] = c);
      var u,
          m = document.createElement("script");
      m.charset = "utf-8", m.timeout = 120, s.nc && m.setAttribute("nonce", s.nc), m.src = i(e), u = function u(t) {
        m.onerror = m.onload = null, clearTimeout(p);
        var n = a[e];

        if (0 !== n) {
          if (n) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, n[1](c);
          }

          a[e] = void 0;
        }
      };
      var p = setTimeout(function () {
        u({
          type: "timeout",
          target: m
        });
      }, 12e4);
      m.onerror = m.onload = u, document.head.appendChild(m);
    }
    return Promise.all(t);
  }, s.m = e, s.c = o, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      s.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var u = global["webpackJsonp"] = global["webpackJsonp"] || [],
      m = u.push.bind(u);
  u.push = t, u = u.slice();

  for (var p = 0; p < u.length; p++) {
    t(u[p]);
  }

  var l = m;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"015c":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("acee"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"06a2":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("aaa8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0732":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(t,e){return Number(t).toFixed(e)},o={toFixed:r};e.default=o},"109d":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("15e9"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"169e":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("d511"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2115:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("5d7c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,u){var c,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,e){return c.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},"298b":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("4c07"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2d58":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),o=i(n("603b"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)})}}var c=t.getStorageSync("USERS_KEY").token,s=function(t){return{getIndexPan:function(){var t=u(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.default.get("/v1/pan/getIndexPan",{header:{token:c}}).then(function(t){return t},function(t){console.log("error",t," at api/modules/homeToken.js:16")});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),takePan:function(){var t=u(r.default.mark(function t(e){var n,i;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.numbers,t.next=3,o.default.get("/v1/pan/takePan",{data:{numbers:n},header:{token:c}}).then(function(t){return t},function(t){console.log("error",t," at api/modules/homeToken.js:36")});case 3:return i=t.sent,t.abrupt("return",i);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},f=s;e.default=f}).call(this,n("6e42")["default"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return x}),n.d(e,"mapState",function(){return E}),n.d(e,"mapMutations",function(){return S}),n.d(e,"mapGetters",function(){return j}),n.d(e,"mapActions",function(){return M}),n.d(e,"createNamespacedHelpers",function(){return C});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function u(t){return null!==t&&"object"===typeof t}function c(t){return t&&"function"===typeof t.then}var s=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},s.prototype.addChild=function(t,e){this._children[t]=e},s.prototype.removeChild=function(t){delete this._children[t]},s.prototype.getChild=function(t){return this._children[t]},s.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},s.prototype.forEachChild=function(t){a(this._children,t)},s.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},s.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},s.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(s.prototype,f);var l=function(t){this.register([],t,!1)};function d(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;d(t.concat(r),e.getChild(r),n.modules[r])}}l.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},l.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},l.prototype.update=function(t){d([],this.root,t)},l.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new s(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},l.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var p;var h=function(t){var e=this;void 0===t&&(t={}),!p&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new l(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new p;var a=this,u=this,c=u.dispatch,s=u.commit;this.dispatch=function(t,e){return c.call(a,t,e)},this.commit=function(t,e,n){return s.call(a,t,e,n)},this.strict=r,m(this,o,[],this._modules.root),_(this,o),n.forEach(function(t){return t(e)}),p.config.devtools&&i(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),_(t,n,e)}function _(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var u=p.config.silent;p.config.silent=!0,t._vm=new p({data:{$$state:e},computed:i}),p.config.silent=u,t.strict&&P(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),p.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var u=A(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){p.set(u,c,r.state)})}var s=r.context=w(t,a,n);r.forEachMutation(function(e,n){var r=a+n;$(t,r,e,s)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;O(t,r,o,s)}),r.forEachGetter(function(e,n){var r=a+n;k(t,r,e,s)}),r.forEachChild(function(r,i){m(t,e,n.concat(i),r,o)})}function w(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=T(n,r,o),a=i.payload,u=i.options,c=i.type;return u&&u.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=T(n,r,o),a=i.payload,u=i.options,c=i.type;u&&u.root||(c=e+c),t.commit(c,a,u)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return A(t.state,n)}}}),o}function b(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function $(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function O(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return c(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function k(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function P(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function A(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function T(t,e,n){return u(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function x(t){p&&t===p||(p=t,r(p))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,o=T(t,e,n),i=o.type,a=o.payload,u=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(u,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=T(t,e),o=r.type,i=r.payload,a={type:o,payload:i},u=this._actions[o];if(u)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),u.length>1?Promise.all(u.map(function(t){return t(i)})):u[0](i)},h.prototype.subscribe=function(t){return g(t,this._subscribers)},h.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),_(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=A(e.state,t.slice(0,-1));p.delete(n,t[t.length-1])}),y(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var E=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=D(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),S=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=D(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),j=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||D(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),M=B(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=D(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),C=function(t){return{mapState:E.bind(null,t),mapGetters:j.bind(null,t),mapMutations:S.bind(null,t),mapActions:M.bind(null,t)}};function I(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function D(t,e,n){var r=t._modulesNamespaceMap[n];return r}var L={Store:h,install:x,version:"3.0.1",mapState:E,mapMutations:S,mapGetters:j,mapActions:M,createNamespacedHelpers:C};e["default"]=L},3824:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("cbb5"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},3829:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("9eeb"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"41a8":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("1082"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4204:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.barValidate=e.userValidate=e.pwdValidate=e.codeValidate=e.joinValidate=e.emailValidate=e.phoneValidate=void 0;var n=/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,r=/^\w+@\w+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/,o=function(e){return""==e.length?(t.showToast({icon:"none",title:"手機號碼不能爲空"}),!1):!(!n.exec(e)||e.length<8)||(t.showToast({icon:"none",title:"手機號碼格式不正確"}),!1)};e.phoneValidate=o;var i=function(e){return""==e.length?(t.showToast({icon:"none",title:"郵箱不能爲空"}),!1):!!r.exec(e)||(t.showToast({icon:"none",title:"郵箱格式不正確"}),!1)};e.emailValidate=i;var a=function(e){return""==e.length?(t.showToast({icon:"none",title:"請輸入注冊的郵箱/手機"}),!1):!(!n.exec(e)&&!r.exec(e))||(t.showToast({icon:"none",title:"格式不正確"}),!1)};e.joinValidate=a;var u=function(e){return""==e.length?(t.showToast({icon:"none",title:"驗證碼不能爲空"}),!1):!(e.length<6)||(t.showToast({icon:"none",title:"驗證碼格式不正確"}),!1)};e.codeValidate=u;var c=function(e,n){return""==e.length?(t.showToast({icon:"none",title:"密碼不能爲空"}),!1):e.length<6?(t.showToast({icon:"none",title:"密碼最短為6個字符"}),!1):n==e||(t.showToast({icon:"none",title:"與上次密碼不一致"}),!1)};e.pwdValidate=c;var s=function(e){return e.name.length<2?(t.showToast({icon:"none",title:"賬戶名最短為2個字符"}),!1):""==e.stature?(t.showToast({icon:"none",title:"請輸入身高"}),!1):e.stature<50||e.stature>300?(t.showToast({icon:"none",title:"身高範圍(cm):50~300"}),!1):""==e.weight?(t.showToast({icon:"none",title:"請輸入體重"}),!1):e.weight<5||e.weight>700?(t.showToast({icon:"none",title:"體重範圍(kg):5~700"}),!1):""==e.age?(t.showToast({icon:"none",title:"請輸入年龄"}),!1):e.age<18||e.age>150?(t.showToast({icon:"none",title:"年龄範圍:18~150"}),!1):""==e.site?(t.showToast({icon:"none",title:"請輸入居住地址"}),!1):""!=e.signature||(t.showToast({icon:"none",title:"請輸入簽名"}),!1)};e.userValidate=s;var f=function(e,r){return""==e.name?(t.showToast({icon:"none",title:"請填寫酒吧名稱"}),!1):""==e.phone.length?(t.showToast({icon:"none",title:"聯係電話不能爲空"}),!1):!n.exec(e.phone)||e.phone.length<8?(t.showToast({icon:"none",title:"联系电话格式不正確"}),!1):""==e.location?(t.showToast({icon:"none",title:"請填寫詳細地址"}),!1):""==e.intro?(t.showToast({icon:"none",title:"請填寫酒吧簡介"}),!1):""==e.username?(t.showToast({icon:"none",title:"請填寫申請人姓名"}),!1):""==e.userphone?(t.showToast({icon:"none",title:"請填寫申請人聯係方式"}),!1):!n.exec(e.userphone)||e.userphone.length<8?(t.showToast({icon:"none",title:"聯係方式格式不正確"}),!1):0!=r||(t.showToast({icon:"none",title:"請上傳酒吧LOGO"}),!1)};e.barValidate=f}).call(this,n("6e42")["default"])},"45cc":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("02b6"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"45f0":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("b1c5"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4620:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("905e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"50cb":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("694f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"52d4":function(t,e,n){"use strict";function r(t){return new Promise(function(e,n){if("object"===typeof window&&"document"in window){var r=document.createElement("canvas"),o=r.getContext("2d"),i=new Image;return i.onload=function(){r.width=i.width,r.height=i.height,o.drawImage(i,0,0),e(r.toDataURL())},i.onerror=n,void(i.src=t)}if("object"!==typeof plus)"object"===typeof wx&&wx.canIUse("getFileSystemManager")?wx.getFileSystemManager().readFile({filePath:t,encoding:"base64",success:function(t){e("data:image/png;base64,"+t.data)},fail:function(t){n(t)}}):n(new Error("not support"));else{var a=new plus.nativeObj.Bitmap("bitmap"+Date.now());a.load(t,function(){try{var t=a.toBase64Data()}catch(r){n(r)}a.clear(),e(t)},function(t){a.clear(),n(t)})}})}function o(t){return new Promise(function(e,n){if("object"===typeof window&&"document"in window){t=t.split(",");var r=t[0].match(/:(.*?);/)[1],o=atob(t[1]),i=o.length,a=new Uint8Array(i);while(i--)a[i]=o.charCodeAt(i);return e((window.URL||window.webkitURL).createObjectURL(new Blob([a],{type:r})))}var u=t.match(/data\:\S+\/(\S+);/);u?u=u[1]:n(new Error("base64 error"));var c=Date.now()+"."+u;if("object"!==typeof plus)if("object"===typeof wx&&wx.canIUse("getFileSystemManager")){var s=wx.env.USER_DATA_PATH+"/"+c;wx.getFileSystemManager().writeFile({filePath:s,data:t.replace(/^data:\S+\/\S+;base64,/,""),encoding:"base64",success:function(){e(s)},fail:function(t){n(t)}})}else n(new Error("not support"));else{var f=new plus.nativeObj.Bitmap("bitmap"+Date.now());f.loadBase64Data(t,function(){var t="_doc/uniapp_temp/"+c;f.save(t,{},function(){f.clear(),e(t)},function(t){f.clear(),n(t)})},function(t){f.clear(),n(t)})}})}Object.defineProperty(e,"__esModule",{value:!0}),e.pathToBase64=r,e.base64ToPath=o},"5fd6":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("2220"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"603b":function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,c,"next",t)}function c(t){a(i,r,o,u,c,"throw",t)}u(void 0)})}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}var l=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,e),this.config={},this.config.baseUrl=n.baseUrl?n.baseUrl:"",this.config.dataType=n.dataType?n.dataType:"json",this.config.responseType=n.responseType?n.responseType:"text",this.config.header=n.header?n.header:{},this.reqInterceptors=null,this.resInterceptors=null,this.interceptors={request:function(e){t.reqInterceptors=e},response:function(e){t.resInterceptors=e}}}return f(e,[{key:"get",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("get",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"post",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("post",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"put",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("put",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"delete",value:function(){var t=u(o.default.mark(function t(e){var n,r=arguments;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.abrupt("return",this._request("delete",e,n));case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"setConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config=Object.assign({},this._merge(this.config,t))}},{key:"_request",value:function(e,n,r){var o=this,i=Object.assign({},this._merge(this.config,r)),a={};if(this.reqInterceptors&&"function"===typeof this.reqInterceptors){var u=this.reqInterceptors(i);if(!u)return!1;a=Object.assign({},u)}else a=Object.assign({},i);return new Promise(function(r,i){t.request({url:o._formatUrl(a.baseUrl,n),method:e,data:a.data?a.data:{},header:a.header,dataType:a.dataType,responseType:a.responseType,complete:function(t){var e=t;if(!e.statusCode||200!==e.statusCode){var n=o.resInterceptors(e);return e=n,void i(e)}if(o.resInterceptors&&"function"===typeof o.resInterceptors){var a=o.resInterceptors(e);if(!a)return void i("返回值已被您拦截！");e=a}r(e)}})})}},{key:"_formatUrl",value:function(t,e){if(!t)return e;var n="",r=t.endsWith("/"),o=e.startsWith("/");return n=r&&o?t+e.substring(1):r||o?t+e:t+"/"+e,n}},{key:"_merge",value:function(t,e){var n=Object.assign({},t);if(!e||!Object.keys(e).length)return n;for(var r in e)if("header"!==r)n[r]=e[r];else if("[object Object]"===Object.prototype.toString.call(e[r]))for(var o in e[r])n[r][o]=e[r][o];return n}}]),e}();r.$request||(r.$request=new l);var d=r.$request;e.default=d}).call(this,n("6e42")["default"],n("c8ba"))},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function u(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var s=Object.prototype.toString;function f(t){return"[object Object]"===s.call(t)}function l(t){return"[object RegExp]"===s.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function p(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===s?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function w(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,O=b(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),k=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),P=/\B([A-Z])/g,A=b(function(t){return t.replace(P,"-$1").toLowerCase()});function T(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var E=Function.prototype.bind?x:T;function S(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function j(t,e){for(var n in e)t[n]=e[n];return t}function M(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function C(t,e,n){}var I=function(t,e,n){return!1},B=function(t){return t};function D(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return D(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),u=Object.keys(e);return a.length===u.length&&a.every(function(n){return D(t[n],e[n])})}catch(s){return!1}}function L(t,e){for(var n=0;n<t.length;n++)if(D(t[n],e))return n;return-1}function N(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var R=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:C,parsePlatformTagName:B,mustUseProp:I,async:!0,_lifecycleHooks:U},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var G=new RegExp("[^"+V.source+".$_\\d]");function z(t){if(!G.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,J="__proto__"in{},W="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Q=W&&window.navigator.userAgent.toLowerCase(),Z=Q&&/msie|trident/.test(Q),tt=(Q&&Q.indexOf("msie 9.0"),Q&&Q.indexOf("edge/")>0),et=(Q&&Q.indexOf("android"),Q&&/iphone|ipad|ipod|ios/.test(Q)||"ios"===X),nt=(Q&&/chrome\/\d+/.test(Q),Q&&/phantomjs/.test(Q),Q&&Q.match(/firefox\/(\d+)/),{}.watch);if(W)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===K&&(K=!W&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},it=W&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var ut,ct="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);ut="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var st=C,ft=0,lt=function(){this.id=ft++,this.subs=[]};lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){_(this.subs,t)},lt.prototype.depend=function(){lt.target&&lt.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.target=null;var dt=[];function pt(t){dt.push(t),lt.target=t}function ht(){dt.pop(),lt.target=dt[dt.length-1]}var vt=function(t,e,n,r,o,i,a,u){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=u,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,gt);var yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function _t(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=Array.prototype,bt=Object.create(wt),$t=["push","pop","shift","unshift","splice","sort","reverse"];$t.forEach(function(t){var e=wt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var Ot=Object.getOwnPropertyNames(bt),kt=!0;function Pt(t){kt=t}var At=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(J?Tt(t,bt):xt(t,bt,Ot),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function xt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function Et(t,e){var n;if(c(t)&&!(t instanceof vt))return w(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:kt&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function St(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var u=a&&a.get,c=a&&a.set;u&&!c||2!==arguments.length||(n=t[e]);var s=!o&&Et(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=u?u.call(t):n;return lt.target&&(i.depend(),s&&(s.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=u?u.call(t):n;e===r||e!==e&&r!==r||u&&!c||(c?c.call(t,e):n=e,s=!o&&Et(e),i.notify())}})}}function jt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(St(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)St(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Et(t[e])};var It=F.optionMergeStrategies;function Bt(t,e){if(!e)return t;for(var n,r,o,i=ct?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],w(t,n)?r!==o&&f(r)&&f(o)&&Bt(r,o):jt(t,n,o));return t}function Dt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Bt(r,o):o}:e?t?function(){return Bt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Nt(n):n}function Nt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Rt(t,e,n,r){var o=Object.create(t||null);return e?j(o,e):o}It.data=function(t,e,n){return n?Dt(t,e,n):e&&"function"!==typeof e?t:Dt(t,e)},U.forEach(function(t){It[t]=Lt}),R.forEach(function(t){It[t+"s"]=Rt}),It.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in j(o,t),e){var a=o[i],u=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(u):Array.isArray(u)?u:[u]}return o},It.props=It.methods=It.inject=It.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return j(o,t),e&&j(o,e),o},It.provide=Dt;var Ut=function(t,e){return void 0===e?t:e};function Ft(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var u in n)o=n[u],i=O(u),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function Vt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?j({from:i},a):{from:a}}else 0}}function qt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Ft(e,n),Vt(e,n),qt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ht(t,e.mixins[r],n);var i,a={};for(i in t)u(i);for(i in e)w(t,i)||u(i);function u(r){var o=It[r]||Ut;a[r]=o(t[r],e[r],n,r)}return a}function Gt(t,e,n,r){if("string"===typeof n){var o=t[e];if(w(o,n))return o[n];var i=O(n);if(w(o,i))return o[i];var a=k(i);if(w(o,a))return o[a];var u=o[n]||o[i]||o[a];return u}}function zt(t,e,n,r){var o=e[t],i=!w(n,t),a=n[t],u=Yt(Boolean,o.type);if(u>-1)if(i&&!w(o,"default"))a=!1;else if(""===a||a===A(t)){var c=Yt(String,o.type);(c<0||u<c)&&(a=!0)}if(void 0===a){a=Kt(r,o,t);var s=kt;Pt(!0),Et(a),Pt(s)}return a}function Kt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Jt(t)===Jt(e)}function Yt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Wt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Zt(no,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Qt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&p(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Xt(no,r,o)}return i}function Zt(t,e,n){if(F.errorHandler)try{return F.errorHandler.call(null,t,e,n)}catch(no){no!==t&&te(no,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!W&&!Y||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function oe(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var ie=Promise.resolve();ee=function(){ie.then(oe),et&&setTimeout(C)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var ae=1,ue=new MutationObserver(oe),ce=document.createTextNode(String(ae));ue.observe(ce,{characterData:!0}),ee=function(){ae=(ae+1)%2,ce.data=String(ae)}}function se(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(no){Xt(no,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var fe=new ut;function le(t){de(t,fe),fe.clear()}function de(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)de(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)de(t[r[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Qt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,o,a,u){var c,s,f,l;for(c in t)s=t[c],f=e[c],l=pe(c),r(s)||(r(f)?(r(s.fns)&&(s=t[c]=he(s,u)),i(l.once)&&(s=t[c]=a(l.name,s,l.capture)),n(l.name,s,l.capture,l.passive,l.params)):s!==f&&(f.fns=s,t[c]=f));for(c in e)r(t[c])&&(l=pe(c),o(l.name,e[c],l.capture))}function ge(t,e,n){var i=e.options.props;if(!r(i)){var a={},u=t.attrs,c=t.props;if(o(u)||o(c))for(var s in i){var f=A(s);ye(a,c,s,f,!0)||ye(a,u,s,f,!1)}return a}}function ye(t,e,n,r,i){if(o(e)){if(w(e,n))return t[n]=e[n],i||delete e[n],!0;if(w(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function _e(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return u(t)?[_t(t)]:Array.isArray(t)?be(t):void 0}function we(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,c,s,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(c=f.length-1,s=f[c],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),we(a[0])&&we(s)&&(f[c]=_t(s.text+a[0].text),a.shift()),f.push.apply(f,a)):u(a)?we(s)?f[c]=_t(s.text+a):""!==a&&f.push(_t(a)):we(a)&&we(s)?f[c]=_t(s.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function $e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Oe(t){var e=ke(t.$options.inject,t);e&&(Pt(!1),Object.keys(e).forEach(function(n){St(t,n,e[n])}),Pt(!0))}function ke(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,u=e;while(u){if(u._provided&&w(u._provided,a)){n[i]=u._provided[a];break}u=u.$parent}if(!u)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function Pe(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(i);else{var u=a.slot,c=n[u]||(n[u]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var s in n)n[s].every(Ae)&&delete n[s];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,u=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&u===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},t)t[c]&&"$"!==c[0]&&(o[c]=xe(e,c,t[c]))}else o={};for(var s in e)s in o||(o[s]=Ee(e,s));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",u),H(o,"$hasNormal",i),o}function xe(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function Se(t,e){var n,r,i,a,u;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var s=t[Symbol.iterator](),f=s.next();while(!f.done)n.push(e(f.value,n.length)),f=s.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)u=a[r],n[r]=e(t[u],u,r);return o(n)||(n=[]),n._isVList=!0,n}function je(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=j(j({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Me(t){return Gt(this.$options,"filters",t,!0)||B}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ie(t,e,n,r,o){var i=F.keyCodes[e]||n;return o&&r&&!F.keyCodes[e]?Ce(o,r):i?Ce(i,t):r?A(r)!==e:void 0}function Be(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=M(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var u=t.attrs&&t.attrs.type;i=r||F.mustUseProp(e,u,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=O(a),s=A(a);if(!(c in i)&&!(s in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var u in n)a(u)}else;return t}function De(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ne(r,"__static__"+t,!1),r)}function Le(t,e,n){return Ne(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ne(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Re(t[r],e+"_"+r,n);else Re(t,e,n)}function Re(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ue(t,e){if(e)if(f(e)){var n=t.on=t.on?j({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Fe(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Fe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ve(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function qe(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Le,t._n=v,t._s=h,t._l=Se,t._t=je,t._q=D,t._i=L,t._m=De,t._f=Me,t._k=Ie,t._b=Be,t._v=_t,t._e=yt,t._u=Fe,t._g=Ue,t._d=Ve,t._p=qe}function Ge(t,e,r,o,a){var u,c=this,s=a.options;w(o,"_uid")?(u=Object.create(o),u._original=o):(u=o,o=o._original);var f=i(s._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=ke(s.inject,o),this.slots=function(){return c.$slots||Te(t.scopedSlots,c.$slots=Pe(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),f&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),s._scopeId?this._c=function(t,e,n,r){var i=on(u,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=s._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(u,t,e,n,r,l)}}function ze(t,e,r,i,a){var u=t.options,c={},s=u.props;if(o(s))for(var f in s)c[f]=zt(f,s,e||n);else o(r.attrs)&&Je(c,r.attrs),o(r.props)&&Je(c,r.props);var l=new Ge(r,c,a,i,t),d=u.render.call(null,l._c,l);if(d instanceof vt)return Ke(d,r,l.parent,u,l);if(Array.isArray(d)){for(var p=me(d)||[],h=new Array(p.length),v=0;v<p.length;v++)h[v]=Ke(p[v],r,l.parent,u,l);return h}}function Ke(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(t,e){for(var n in e)t[O(n)]=e[n]}He(Ge.prototype);var We={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;We.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,kn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;xn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Mn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Sn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?jn(e,!0):e.$destroy())}},Ye=Object.keys(We);function Xe(t,e,n,a,u){if(!r(t)){var s=n.$options._base;if(c(t)&&(t=s.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,s),void 0===t))return hn(f,e,n,a,u);e=e||{},pr(t),o(e.model)&&en(t.options,e);var l=ge(e,t,u);if(i(t.options.functional))return ze(t,l,e,n,a);var d=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}Ze(e);var h=t.options.name||u,v=new vt("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:d,tag:u,children:a},f);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ye.length;n++){var r=Ye[n],o=e[r],i=We[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],u=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(u):a!==u)&&(i[r]=[u].concat(a)):i[r]=u}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||u(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,u,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=me(r):i===nn&&(r=_e(r)),"string"===typeof e)?(u=t.$vnode&&t.$vnode.ns||F.getTagNamespace(e),a=F.isReservedTag(e)?new vt(F.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=Gt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):Xe(c,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(u)&&un(a,u),o(n)&&cn(n),a):yt()}function un(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,u=t.children.length;a<u;a++){var c=t.children[a];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&un(c,e,n)}}function cn(t){c(t.style)&&le(t.style),c(t.class)&&le(t.class)}function sn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Pe(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;St(t,"$attrs",i&&i.attrs||n,null,!0),St(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function dn(t){He(t.prototype),t.prototype.$nextTick=function(t){return se(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Te(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Xt(no,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=ln;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],u=!0,s=null,f=null;n.$on("hook:destroyed",function(){return _(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==s&&(clearTimeout(s),s=null),null!==f&&(clearTimeout(f),f=null))},d=N(function(n){t.resolved=pn(n,e),u?a.length=0:l(!0)}),h=N(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(d,h);return c(v)&&(p(v)?r(t.resolved)&&v.then(d,h):p(v.component)&&(v.component.then(d,h),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:s=setTimeout(function(){s=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&h(null)},v.timeout)))),u=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||gn(n)))return n}}function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$n(t,e)}function mn(t,e){fn.$on(t,e)}function wn(t,e){fn.$off(t,e)}function bn(t,e){var n=fn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function $n(t,e,n){fn=t,ve(e,n||{},mn,wn,bn,t),fn=void 0}function On(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var u=a.length;while(u--)if(i=a[u],i===e||i.fn===e){a.splice(u,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?S(n):n;for(var r=S(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Qt(n[i],e,r,e,o)}return e}}var kn=null;function Pn(t){var e=kn;return kn=t,function(){kn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=Pn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Mn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Mn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function xn(t,e,r,o,i){var a=o.data.scopedSlots,u=t.$scopedSlots,c=!!(a&&!a.$stable||u!==n&&!u.$stable||a&&t.$scopedSlots.$key!==a.$key),s=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Pt(!1);for(var f=t._props,l=t.$options._propKeys||[],d=0;d<l.length;d++){var p=l[d],h=t.$options.props;f[p]=zt(p,h,e,t)}Pt(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,$n(t,r,v),s&&(t.$slots=Pe(i,o.context),t.$forceUpdate())}function En(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Sn(t,e){if(e){if(t._directInactive=!1,En(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Sn(t.$children[n]);Mn(t,"activated")}}function jn(t,e){if((!e||(t._directInactive=!0,!En(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)jn(t.$children[n]);Mn(t,"deactivated")}}function Mn(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Qt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Cn=[],In=[],Bn={},Dn=!1,Ln=!1,Nn=0;function Rn(){Nn=Cn.length=In.length=0,Bn={},Dn=Ln=!1}var Un=Date.now;if(W&&!Z){var Fn=window.performance;Fn&&"function"===typeof Fn.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return Fn.now()})}function Vn(){var t,e;for(Un(),Ln=!0,Cn.sort(function(t,e){return t.id-e.id}),Nn=0;Nn<Cn.length;Nn++)t=Cn[Nn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=In.slice(),r=Cn.slice();Rn(),Gn(n),qn(r),it&&F.devtools&&it.emit("flush")}function qn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Mn(r,"updated")}}function Hn(t){t._inactive=!1,In.push(t)}function Gn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Sn(t[e],!0)}function zn(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,Ln){var n=Cn.length-1;while(n>Nn&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Dn||(Dn=!0,se(Vn))}}var Kn=0,Jn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Kn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ut,this.newDepIds=new ut,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Xt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),ht(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Xt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Wn={enumerable:!0,configurable:!0,get:C,set:C};function Yn(t,e,n){Wn.get=function(){return this[e][n]},Wn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Wn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ar(t,e.methods),e.data?Zn(t):Et(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&ur(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||Pt(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);St(r,i,a),i in t||Yn(t,"_props",i)};for(var u in e)a(u);Pt(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&w(r,i)||q(i)||Yn(t,"_data",i)}Et(e,!0)}function tr(t,e){pt();try{return t.call(e,e)}catch(no){return Xt(no,e,"data()"),{}}finally{ht()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Jn(t,a||C,C,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(Wn.get=r?or(e):ir(n),Wn.set=C):(Wn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):C,Wn.set=n.set||C),Object.defineProperty(t,e,Wn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?C:E(e[n],t)}function ur(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)cr(t,n,r[o]);else cr(t,n,r)}}function cr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function sr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=jt,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return cr(r,t,e,n);n=n||{},n.user=!0;var o=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?dr(e,t):e.$options=Ht(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),_n(e),sn(e),Mn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Oe(e),Xn(e),"mp-toutiao"!==e.mpHost&&$e(e),"mp-toutiao"!==e.mpHost&&Mn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function dr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&j(t.extendOptions,o),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function gr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=S(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function _r(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ht(n.options,t),a["super"]=n,a.options.props&&mr(a),a.options.computed&&wr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,R.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=j({},a.options),o[r]=a,a}}function mr(t){var e=t.options.props;for(var n in e)Yn(t.prototype,"_props",n)}function wr(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function br(t){R.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function $r(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function kr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var u=$r(a.componentOptions);u&&!e(u)&&Pr(n,i,r,o)}}}function Pr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,_(n,e)}lr(vr),sr(vr),On(vr),Tn(vr),dn(vr);var Ar=[String,RegExp,Array],Tr={name:"keep-alive",abstract:!0,props:{include:Ar,exclude:Ar,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){kr(t,function(t){return Or(e,t)})}),this.$watch("exclude",function(e){kr(t,function(t){return!Or(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=$r(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!Or(i,r))||a&&r&&Or(a,r))return e;var u=this,c=u.cache,s=u.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[f]?(e.componentInstance=c[f].componentInstance,_(s,f),s.push(f)):(c[f]=e,s.push(f),this.max&&s.length>parseInt(this.max)&&Pr(c,s[0],s,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},xr={KeepAlive:Tr};function Er(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:st,extend:j,mergeOptions:Ht,defineReactive:St},t.set=jt,t.delete=Mt,t.nextTick=se,t.observable=function(t){return Et(t),t},t.options=Object.create(null),R.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,j(t.options.components,xr),gr(t),yr(t),_r(t),br(t)}Er(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:Ge}),vr.version="2.6.10";var Sr="[object Array]",jr="[object Object]";function Mr(t,e){var n={};return Cr(t,e),Ir(t,e,"",n),n}function Cr(t,e){if(t!==e){var n=Dr(t),r=Dr(e);if(n==jr&&r==jr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Cr(i,e[o])}}else n==Sr&&r==Sr&&t.length>=e.length&&e.forEach(function(e,n){Cr(t[n],e)})}}function Ir(t,e,n,r){if(t!==e){var o=Dr(t),i=Dr(e);if(o==jr)if(i!=jr||Object.keys(t).length<Object.keys(e).length)Br(r,n,t);else{var a=function(o){var i=t[o],a=e[o],u=Dr(i),c=Dr(a);if(u!=Sr&&u!=jr)i!=e[o]&&Br(r,(""==n?"":n+".")+o,i);else if(u==Sr)c!=Sr?Br(r,(""==n?"":n+".")+o,i):i.length<a.length?Br(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ir(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(u==jr)if(c!=jr||Object.keys(i).length<Object.keys(a).length)Br(r,(""==n?"":n+".")+o,i);else for(var s in i)Ir(i[s],a[s],(""==n?"":n+".")+o+"."+s,r)};for(var u in t)a(u)}else o==Sr?i!=Sr?Br(r,n,t):t.length<e.length?Br(r,n,t):t.forEach(function(t,o){Ir(t,e[o],n+"["+o+"]",r)}):Br(r,n,t)}}function Br(t,e,n){t[e]=n}function Dr(t){return Object.prototype.toString.call(t)}function Lr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Nr(t){return Cn.find(function(e){return t._watcher===e})}function Rr(t,e){if(!t.__next_tick_pending&&!Nr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return se(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Xt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Ur(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{})),n=e.reduce(function(e,n){return e[n]=t[n],e},Object.create(null));return Object.assign(n,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(n["name"]=t.name,n["value"]=t.value),JSON.parse(JSON.stringify(n))}var Fr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Ur(this);o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Mr(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Lr(n)})):Lr(this)}};function Vr(){}function qr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Vr),t.$options.render||(t.$options.render=Vr),"mp-toutiao"!==t.mpHost&&Mn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,C,{before:function(){t._isMounted&&!t._isDestroyed&&Mn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return o(t)||o(e)?Gr(t,zr(e)):""}function Gr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Kr(t):c(t)?Jr(t):"string"===typeof t?t:""}function Kr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Wr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Yr(t){return Array.isArray(t)?M(t):"string"===typeof t?Wr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Zr(t){var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:S(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Rr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=$e,t.prototype.__init_injections=Oe,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,u=o.length;a<u;a++)r=Qt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Yr(t),r=e?j(e,n):n;return Object.keys(r).map(function(t){return A(t)+":"+r[t]}).join(";")}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=Fr,vr.prototype.$mount=function(t,e){return qr(this,t,e)},eo(vr),Zr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=qt,e.createPage=Qt,e.createComponent=Zt,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||u(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==u["return"]||u["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object.prototype.toString,l=Object.prototype.hasOwnProperty;function d(t){return"function"===typeof t}function p(t){return"string"===typeof t}function h(t){return"[object Object]"===f.call(t)}function v(t,e){return l.call(t,e)}function g(){}function y(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var _=/-(\w)/g,m=y(function(t){return t.replace(_,function(t,e){return e?e.toUpperCase():""})}),w=/^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,b=/^create|Manager$/,$=/^on/;function O(t){return b.test(t)}function k(t){return w.test(t)}function P(t){return $.test(t)}function A(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function T(t){return!(O(t)||k(t)||P(t))}function x(t,e){return T(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(t.success)||d(t.fail)||d(t.complete)?e.apply(void 0,[t].concat(r)):A(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})}))}:e}var E=1e-4,S=750,j=!1,M=0,C=0;function I(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;M=r,C=n,j="ios"===e}function B(t,e){if(0===M&&I(),t=Number(t),0===t)return 0;var n=t/S*(e||M);return n<0&&(n=-n),n=Math.floor(n+E),0===n?1!==C&&j?.5:1:t<0?-n:n}var D={},L=[],N=[],R=["success","fail","cancel","complete"];function U(t,e,n){return function(r){return e(V(t,r,n))}}function F(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(h(e)){var i=!0===o?e:{};for(var a in d(n)&&(n=n(e,i)||{}),e)if(v(n,a)){var u=n[a];d(u)&&(u=u(e[a],e,i)),u?p(u)?i[u]=e[a]:h(u)&&(i[u.name?u.name:a]=u.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==R.indexOf(a)?i[a]=U(t,e[a],r):o||(i[a]=e[a]);return i}return d(e)&&(e=U(t,e,r)),e}function V(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(D.returnValue)&&(e=D.returnValue(t,e)),F(t,e,n,{},r)}function q(t,e){if(v(D,t)){var n=D[t];return n?function(e,r){var o=n;d(n)&&(o=n(e)),e=F(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return k(t)?V(t,a,o.returnValue,O(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var H=Object.create(null),G=["subscribePush","unsubscribePush","onPush","offPush","share"];function z(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};d(n)&&n(o),d(r)&&r(o)}}G.forEach(function(t){H[t]=z(t)});var K=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function J(t,e,n){return t[e].apply(t,n)}function W(){return J(K(),"$on",Array.prototype.slice.call(arguments))}function Y(){return J(K(),"$off",Array.prototype.slice.call(arguments))}function X(){return J(K(),"$once",Array.prototype.slice.call(arguments))}function Q(){return J(K(),"$emit",Array.prototype.slice.call(arguments))}var Z=Object.freeze({$on:W,$off:Y,$once:X,$emit:Q});function tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,u=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function et(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&tt(e),e}function nt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var rt=Object.freeze({requireNativePlugin:nt,getSubNVueById:et}),ot=Page,it=Component,at=/:/g,ut=y(function(t){return m(t.replace(at,"-"))});function ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[ut(n)].concat(o))}}}function st(t,e){var n=e[t];e[t]=n?function(){ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return st("onLoad",t),ot(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return st("created",t),it(t)};var ft=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function lt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){v(n,e)&&(t[e]=n[e])})}function dt(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)}})}function pt(t,e){var n;return e=e.default||e,d(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function ht(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function gt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return h(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||v(n,t)||(n[t]=r[t])}),n}var yt=[String,Number,Boolean,Object,Array,null];function _t(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function mt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]=String,i["value"]=null))}),h(r)&&r.props&&a.push(e({properties:bt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){h(t)&&t.props&&a.push(e({properties:bt(t.props,!0)}))}),a}function wt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function bt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueId={type:String,value:""},r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:_t(t)}}):h(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(h(o)){var i=o["default"];d(i)&&(i=i()),o.type=wt(e,o.type,i,n),r[e]={type:-1!==yt.indexOf(o.type)?o.type:null,value:i,observer:_t(e)}}else{var a=wt(e,o,null,n);r[e]={type:-1!==yt.indexOf(a)?a:null,observer:_t(e)}}}),r}function $t(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=g,t.preventDefault=g,t.target=t.target||{},v(t,"detail")||(t.detail={}),h(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Ot(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],u=r?t.__get_value(r,n):n;Number.isInteger(u)?n=o:i?Array.isArray(u)?n=u.find(function(e){return t.__get_value(i,e)===o}):h(u)?n=Object.keys(u).find(function(e){return t.__get_value(i,u[e])===o}):console.error("v-for 暂不支持循环数据：",u):n=u[o],a&&(n=t.__get_value(a,n))}}),n}function kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Ot(t,e)}),r}function Pt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function At(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var u=kt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Pt(t)):"string"===typeof t&&v(u,t)?c.push(u[t]):c.push(t)}),c}var Tt="~",xt="^";function Et(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function St(t){var e=this;t=$t(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],a=o.charAt(0)===xt;o=a?o.slice(1):o;var u=o.charAt(0)===Tt;o=u?o.slice(1):o,i&&Et(r,o)&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var i=o[r];if(!d(i))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(i.once)return;i.once=!0}i.apply(o,At(e.$vm,t,n[1],n[2],a,r))}})})}var jt=["onShow","onHide","onError","onPageNotFound"];function Mt(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=s({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),lt(this,n)))}});var i={onLaunch:function(e){this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e)}};return i.globalData=t.$options.globalData||{},dt(i,jt),i}var Ct=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function It(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=It(n[o],e),r)return r}function Bt(t){return Behavior(t)}function Dt(){return!!this.route}function Lt(t){this.triggerEvent("__l",t)}function Nt(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function Rt(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=It(this.$vm,r)),e||(e=this.$vm),o.parent=e}function Ut(t){return Mt(t,{mocks:Ct,initRefs:Nt})}var Ft=["onUniNViewMessage"];function Vt(t){var e=Ut(t);return dt(e,Ft),e}function qt(t){return App(Vt(t)),t}function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=pt(r.default,t),u=i(a,2),c=u[0],s=u[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:gt(s,r.default.prototype),behaviors:mt(s,Bt),properties:bt(s.props,!1,s.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),ht(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:Rt,__e:St}};return n?f:[f,c]}function Gt(t){return Ht(t,{isPage:Dt,initRelation:Lt})}function zt(t){var e=Gt(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var Kt=["onShow","onHide","onUnload"];function Jt(t,e){var n=e.isPage,r=e.initRelation,o=zt(t,{isPage:n,initRelation:r});return dt(o.methods,Kt),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function Wt(t){return Jt(t,{isPage:Dt,initRelation:Lt})}Kt.push.apply(Kt,ft);var Yt=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Xt(t){var e=Wt(t);return dt(e.methods,Yt),e}function Qt(t){return Component(Xt(t))}function Zt(t){return Component(zt(t))}L.forEach(function(t){D[t]=!1}),N.forEach(function(t){var e=D[t]&&D[t].name?D[t].name:t;wx.canIUse(e)||(D[t]=!1)});var te={};"undefined"!==typeof Proxy?te=new Proxy({},{get:function(t,e){return"upx2px"===e?B:rt[e]?x(e,rt[e]):Z[e]?Z[e]:v(wx,e)||v(D,e)?x(e,q(e,wx[e])):void 0}}):(te.upx2px=B,Object.keys(Z).forEach(function(t){te[t]=Z[t]}),Object.keys(rt).forEach(function(t){te[t]=x(t,rt[t])}),Object.keys(wx).forEach(function(t){(v(wx,t)||v(D,t))&&(te[t]=x(t,q(t,wx[t])))})),"undefined"!==typeof t&&(t.UniEmitter=Z),wx.createApp=qt,wx.createPage=Qt,wx.createComponent=Zt;var ee=te,ne=ee;e.default=ne}).call(this,n("c8ba"))},7868:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("2c9c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7bbc":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("5253"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8034:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("c2d1"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=w;var l="suspendedStart",d="suspendedYield",p="executing",h="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,_=y&&y(y(M([])));_&&_!==r&&o.call(_,a)&&(g=_);var m=k.prototype=$.prototype=Object.create(g);O.prototype=m.constructor=k,k.constructor=O,k[c]=O.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},P(A.prototype),A.prototype[u]=function(){return this},f.AsyncIterator=A,f.async=function(t,e,n,r){var o=new A(w(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},P(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=M,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function w(t,e,n,r){var o=e&&e.prototype instanceof $?e:$,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=T(t,n,a),i}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function $(){}function O(){}function k(){}function P(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function A(t){function e(n,r,i,a){var u=b(t[n],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(u.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function T(t,e,n){var r=l;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return C()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=b(t,e,n);if("normal"===c.type){if(r=n.done?h:d,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function x(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,x(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=b(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function M(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9c3c":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("803f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9ec5":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("e1d5"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9f95":function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("fecd"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a1bc:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("9061"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a34a:function(t,e,n){t.exports=n("bbdd")},a71a:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("5d64"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a7e3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("2d58"));function o(t){return t&&t.__esModule?t:{default:t}}var i={homeToken:r.default};e.default=i},aad3:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("66fd")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=new o.default.Store({state:{requireAuth:!1,hasLogin:""!=t.getStorageSync("USERS_KEY").token,voteValue:{voteName:"",voteId:0,voteStatus:0},imgTemp:"",isHidden:!!t.getStorageSync("ASSET_KEY")},mutations:{setBarText:function(t,e){t.voteValue="",t.voteValue=e},logout:function(t){t.token="",t.hasLogin=!1},setImgTemp:function(t,e){t.imgTemp=e}}}),u=a;e.default=u}).call(this,n("6e42")["default"])},b337:function(t,e,n){"use strict";var r=function(t,e){var n=236,r=17,o=t,a=i[e],c=null,p=0,h=null,v=new Array,g={},_=function(t,e){p=4*o+17,c=function(t){for(var e=new Array(t),n=0;n<t;n+=1){e[n]=new Array(t);for(var r=0;r<t;r+=1)e[n][r]=null}return e}(p),m(0,0),m(p-7,0),m(0,p-7),$(),b(),k(t,e),o>=7&&O(t),null==h&&(h=T(o,a,v)),P(h,e)},m=function(t,e){for(var n=-1;n<=7;n+=1)if(!(t+n<=-1||p<=t+n))for(var r=-1;r<=7;r+=1)e+r<=-1||p<=e+r||(c[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},w=function(){for(var t=0,e=0,n=0;n<8;n+=1){_(!0,n);var r=u.getLostPoint(g);(0==n||t>r)&&(t=r,e=n)}return e},b=function(){for(var t=8;t<p-8;t+=1)null==c[t][6]&&(c[t][6]=t%2==0);for(var e=8;e<p-8;e+=1)null==c[6][e]&&(c[6][e]=e%2==0)},$=function(){for(var t=u.getPatternPosition(o),e=0;e<t.length;e+=1)for(var n=0;n<t.length;n+=1){var r=t[e],i=t[n];if(null==c[r][i])for(var a=-2;a<=2;a+=1)for(var s=-2;s<=2;s+=1)c[r+a][i+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s}},O=function(t){for(var e=u.getBCHTypeNumber(o),n=0;n<18;n+=1){var r=!t&&1==(e>>n&1);c[Math.floor(n/3)][n%3+p-8-3]=r}for(n=0;n<18;n+=1){r=!t&&1==(e>>n&1);c[n%3+p-8-3][Math.floor(n/3)]=r}},k=function(t,e){for(var n=a<<3|e,r=u.getBCHTypeInfo(n),o=0;o<15;o+=1){var i=!t&&1==(r>>o&1);o<6?c[o][8]=i:o<8?c[o+1][8]=i:c[p-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(r>>o&1);o<8?c[8][p-o-1]=i:o<9?c[8][15-o-1+1]=i:c[8][15-o-1]=i}c[p-8][8]=!t},P=function(t,e){for(var n=-1,r=p-1,o=7,i=0,a=u.getMaskFunction(e),s=p-1;s>0;s-=2){6==s&&(s-=1);while(1){for(var f=0;f<2;f+=1)if(null==c[r][s-f]){var l=!1;i<t.length&&(l=1==(t[i]>>>o&1));var d=a(r,s-f);d&&(l=!l),c[r][s-f]=l,o-=1,-1==o&&(i+=1,o=7)}if(r+=n,r<0||p<=r){r-=n,n=-n;break}}}},A=function(t,e){for(var n=0,r=0,o=0,i=new Array(e.length),a=new Array(e.length),c=0;c<e.length;c+=1){var f=e[c].dataCount,l=e[c].totalCount-f;r=Math.max(r,f),o=Math.max(o,l),i[c]=new Array(f);for(var d=0;d<i[c].length;d+=1)i[c][d]=255&t.getBuffer()[d+n];n+=f;var p=u.getErrorCorrectPolynomial(l),h=s(i[c],p.getLength()-1),v=h.mod(p);a[c]=new Array(p.getLength()-1);for(d=0;d<a[c].length;d+=1){var g=d+v.getLength()-a[c].length;a[c][d]=g>=0?v.getAt(g):0}}var y=0;for(d=0;d<e.length;d+=1)y+=e[d].totalCount;var _=new Array(y),m=0;for(d=0;d<r;d+=1)for(c=0;c<e.length;c+=1)d<i[c].length&&(_[m]=i[c][d],m+=1);for(d=0;d<o;d+=1)for(c=0;c<e.length;c+=1)d<a[c].length&&(_[m]=a[c][d],m+=1);return _},T=function(t,e,o){for(var i=f.getRSBlocks(t,e),a=l(),c=0;c<o.length;c+=1){var s=o[c];a.put(s.getMode(),4),a.put(s.getLength(),u.getLengthInBits(s.getMode(),t)),s.write(a)}var d=0;for(c=0;c<i.length;c+=1)d+=i[c].dataCount;if(a.getLengthInBits()>8*d)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+8*d+")");a.getLengthInBits()+4<=8*d&&a.put(0,4);while(a.getLengthInBits()%8!=0)a.putBit(!1);while(1){if(a.getLengthInBits()>=8*d)break;if(a.put(n,8),a.getLengthInBits()>=8*d)break;a.put(r,8)}return A(a,i)};return g.addData=function(t){var e=d(t);v.push(e),h=null},g.isDark=function(t,e){if(t<0||p<=t||e<0||p<=e)throw new Error(t+","+e);return c[t][e]},g.getModuleCount=function(){return p},g.make=function(){_(!1,w())},g.createTableTag=function(t,e){t=t||2,e="undefined"==typeof e?4*t:e;var n="";n+='<table style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: "+e+"px;",n+='">',n+="<tbody>";for(var r=0;r<g.getModuleCount();r+=1){n+="<tr>";for(var o=0;o<g.getModuleCount();o+=1)n+='<td style="',n+=" border-width: 0px; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0px; margin: 0px;",n+=" width: "+t+"px;",n+=" height: "+t+"px;",n+=" background-color: ",n+=g.isDark(r,o)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+="</table>",n},g.createImgTag=function(t,e,n){t=t||2,e="undefined"==typeof e?4*t:e;var r=e,o=g.getModuleCount()*t+e;return y(n,n,function(e,n){if(r<=e&&e<o&&r<=n&&n<o){var i=Math.floor((e-r)/t),a=Math.floor((n-r)/t);return g.isDark(a,i)?0:1}return 1})},g};r.stringToBytes=function(t){for(var e=new Array,n=0;n<t.length;n+=1){var r=t.charCodeAt(n);e.push(255&r)}return e},r.createStringToBytes=function(t,e){var n=function(){var n=v(t),r=function(){var t=n.read();if(-1==t)throw new Error;return t},o=0,i={};while(1){var a=n.read();if(-1==a)break;var u=r(),c=r(),s=r(),f=String.fromCharCode(a<<8|u),l=c<<8|s;i[f]=l,o+=1}if(o!=e)throw new Error(o+" != "+e);return i}(),r="?".charCodeAt(0);return function(t){for(var e=new Array,o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)e.push(i);else{var a=n[t.charAt(o)];"number"==typeof a?(255&a)==a?e.push(a):(e.push(a>>>8),e.push(255&a)):e.push(r)}}return e}};var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},a={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},u=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,r=21522,i={},u=function(t){var e=0;while(0!=t)e+=1,t>>>=1;return e};return i.getBCHTypeInfo=function(t){var n=t<<10;while(u(n)-u(e)>=0)n^=e<<u(n)-u(e);return(t<<10|n)^r},i.getBCHTypeNumber=function(t){var e=t<<12;while(u(e)-u(n)>=0)e^=n<<u(e)-u(n);return t<<12|e},i.getPatternPosition=function(e){return t[e-1]},i.getMaskFunction=function(t){switch(t){case a.PATTERN000:return function(t,e){return(t+e)%2==0};case a.PATTERN001:return function(t,e){return t%2==0};case a.PATTERN010:return function(t,e){return e%3==0};case a.PATTERN011:return function(t,e){return(t+e)%3==0};case a.PATTERN100:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case a.PATTERN101:return function(t,e){return t*e%2+t*e%3==0};case a.PATTERN110:return function(t,e){return(t*e%2+t*e%3)%2==0};case a.PATTERN111:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},i.getErrorCorrectPolynomial=function(t){for(var e=s([1],0),n=0;n<t;n+=1)e=e.multiply(s([1,c.gexp(n)],0));return e},i.getLengthInBits=function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:return 8;case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},i.getLostPoint=function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r+=1)for(var o=0;o<e;o+=1){for(var i=0,a=t.isDark(r,o),u=-1;u<=1;u+=1)if(!(r+u<0||e<=r+u))for(var c=-1;c<=1;c+=1)o+c<0||e<=o+c||0==u&&0==c||a==t.isDark(r+u,o+c)&&(i+=1);i>5&&(n+=3+i-5)}for(r=0;r<e-1;r+=1)for(o=0;o<e-1;o+=1){var s=0;t.isDark(r,o)&&(s+=1),t.isDark(r+1,o)&&(s+=1),t.isDark(r,o+1)&&(s+=1),t.isDark(r+1,o+1)&&(s+=1),0!=s&&4!=s||(n+=3)}for(r=0;r<e;r+=1)for(o=0;o<e-6;o+=1)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(o=0;o<e;o+=1)for(r=0;r<e-6;r+=1)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);var f=0;for(o=0;o<e;o+=1)for(r=0;r<e;r+=1)t.isDark(r,o)&&(f+=1);var l=Math.abs(100*f/e/e-50)/5;return n+=10*l,n},i}(),c=function(){for(var t=new Array(256),e=new Array(256),n=0;n<8;n+=1)t[n]=1<<n;for(n=8;n<256;n+=1)t[n]=t[n-4]^t[n-5]^t[n-6]^t[n-8];for(n=0;n<255;n+=1)e[t[n]]=n;var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return e[t]},gexp:function(e){while(e<0)e+=255;while(e>=256)e-=255;return t[e]}};return r}();function s(t,e){if("undefined"==typeof t.length)throw new Error(t.length+"/"+e);var n=function(){var n=0;while(n<t.length&&0==t[n])n+=1;for(var r=new Array(t.length-n+e),o=0;o<t.length-n;o+=1)r[o]=t[o+n];return r}(),r={getAt:function(t){return n[t]},getLength:function(){return n.length},multiply:function(t){for(var e=new Array(r.getLength()+t.getLength()-1),n=0;n<r.getLength();n+=1)for(var o=0;o<t.getLength();o+=1)e[n+o]^=c.gexp(c.glog(r.getAt(n))+c.glog(t.getAt(o)));return s(e,0)},mod:function(t){if(r.getLength()-t.getLength()<0)return r;for(var e=c.glog(r.getAt(0))-c.glog(t.getAt(0)),n=new Array(r.getLength()),o=0;o<r.getLength();o+=1)n[o]=r.getAt(o);for(o=0;o<t.getLength();o+=1)n[o]^=c.gexp(c.glog(t.getAt(o))+e);return s(n,0).mod(t)}};return r}var f=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(t,e){var n={};return n.totalCount=t,n.dataCount=e,n},n={},r=function(e,n){switch(n){case i.L:return t[4*(e-1)+0];case i.M:return t[4*(e-1)+1];case i.Q:return t[4*(e-1)+2];case i.H:return t[4*(e-1)+3];default:return}};return n.getRSBlocks=function(t,n){var o=r(t,n);if("undefined"==typeof o)throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:"+t+"/errorCorrectLevel:"+n);for(var i=o.length/3,a=new Array,u=0;u<i;u+=1)for(var c=o[3*u+0],s=o[3*u+1],f=o[3*u+2],l=0;l<c;l+=1)a.push(e(s,f));return a},n}(),l=function(){var t=new Array,e=0,n={getBuffer:function(){return t},getAt:function(e){var n=Math.floor(e/8);return 1==(t[n]>>>7-e%8&1)},put:function(t,e){for(var r=0;r<e;r+=1)n.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return e},putBit:function(n){var r=Math.floor(e/8);t.length<=r&&t.push(0),n&&(t[r]|=128>>>e%8),e+=1}};return n},d=function(t){for(var e=o.MODE_8BIT_BYTE,n=t,r=[],i={},a=0,u=n.length;a<u;a++){var c=[],s=n.charCodeAt(a);s>65536?(c[0]=240|(1835008&s)>>>18,c[1]=128|(258048&s)>>>12,c[2]=128|(4032&s)>>>6,c[3]=128|63&s):s>2048?(c[0]=224|(61440&s)>>>12,c[1]=128|(4032&s)>>>6,c[2]=128|63&s):s>128?(c[0]=192|(1984&s)>>>6,c[1]=128|63&s):c[0]=s,r.push(c)}r=Array.prototype.concat.apply([],r),r.length!=n.length&&(r.unshift(191),r.unshift(187),r.unshift(239));var f=r;return i.getMode=function(){return e},i.getLength=function(t){return f.length},i.write=function(t){for(var e=0;e<f.length;e+=1)t.put(f[e],8)},i},p=function(){var t=new Array,e={writeByte:function(e){t.push(255&e)},writeShort:function(t){e.writeByte(t),e.writeByte(t>>>8)},writeBytes:function(t,n,r){n=n||0,r=r||t.length;for(var o=0;o<r;o+=1)e.writeByte(t[o+n])},writeString:function(t){for(var n=0;n<t.length;n+=1)e.writeByte(t.charCodeAt(n))},toByteArray:function(){return t},toString:function(){var e="";e+="[";for(var n=0;n<t.length;n+=1)n>0&&(e+=","),e+=t[n];return e+="]",e}};return e},h=function(){var t=0,e=0,n=0,r="",o={},i=function(t){r+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw new Error("n:"+t)};return o.writeByte=function(r){t=t<<8|255&r,e+=8,n+=1;while(e>=6)i(t>>>e-6),e-=6},o.flush=function(){if(e>0&&(i(t<<6-e),t=0,e=0),n%3!=0)for(var o=3-n%3,a=0;a<o;a+=1)r+="="},o.toString=function(){return r},o},v=function(t){var e=t,n=0,r=0,o=0,i={read:function(){while(o<8){if(n>=e.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var t=e.charAt(n);if(n+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(r=r<<6|a(t.charCodeAt(0)),o+=6)}var i=r>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw new Error("c:"+t)};return i},g=function(t,e){var n=t,r=e,o=new Array(t*e),i={setPixel:function(t,e,r){o[e*n+t]=r},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(r),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(r),t.writeByte(0);var e=2,o=u(e);t.writeByte(e);var i=0;while(o.length-i>255)t.writeByte(255),t.writeBytes(o,i,255),i+=255;t.writeByte(o.length-i),t.writeBytes(o,i,o.length-i),t.writeByte(0),t.writeString(";")}},a=function(t){var e=t,n=0,r=0,o={write:function(t,o){if(t>>>o!=0)throw new Error("length over");while(n+o>=8)e.writeByte(255&(t<<n|r)),o-=8-n,t>>>=8-n,r=0,n=0;r|=t<<n,n+=o},flush:function(){n>0&&e.writeByte(r)}};return o},u=function(t){for(var e=1<<t,n=1+(1<<t),r=t+1,i=c(),u=0;u<e;u+=1)i.add(String.fromCharCode(u));i.add(String.fromCharCode(e)),i.add(String.fromCharCode(n));var s=p(),f=a(s);f.write(e,r);var l=0,d=String.fromCharCode(o[l]);l+=1;while(l<o.length){var h=String.fromCharCode(o[l]);l+=1,i.contains(d+h)?d+=h:(f.write(i.indexOf(d),r),i.size()<4095&&(i.size()==1<<r&&(r+=1),i.add(d+h)),d=h)}return f.write(i.indexOf(d),r),f.write(n,r),f.flush(),s.toByteArray()},c=function(){var t={},e=0,n={add:function(r){if(n.contains(r))throw new Error("dup key:"+r);t[r]=e,e+=1},size:function(){return e},indexOf:function(e){return t[e]},contains:function(e){return"undefined"!=typeof t[e]}};return n};return i},y=function(t,e,n,r){for(var o=g(t,e),i=0;i<e;i+=1)for(var a=0;a<t;a+=1)o.setPixel(a,i,n(a,i));var u=p();o.write(u);for(var c=h(),s=u.toByteArray(),f=0;f<s.length;f+=1)c.writeByte(s[f]);c.flush();var l="";return l+="data:image/gif;base64,",l+=c,l},_=function(t,e){e=e||{};var n,o=e.typeNumber||4,i=e.errorCorrectLevel||"M",a=e.size||500;try{n=r(o,i||"M"),n.addData(t),n.make()}catch(s){if(o>=40)throw new Error("Text too long to encode");return gen(t,{size:a,errorCorrectLevel:i,typeNumber:o+1})}var u=parseInt(a/n.getModuleCount()),c=parseInt((a-n.getModuleCount()*u)/2);return n.createImgTag(u,c,a)};t.exports={createQrCodeImg:_}},b71c:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("0489"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b759:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("ac01"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b7a1:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("e2b06"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},bf2a:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("bcc8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c0ba:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createDyn=e.upload=e.getImgTemp=e.upPicture=e.getInvCode=e.upLogo=e.setBar=e.getBarList=e.sysVote=e.isVote=e.toTreIndex=e.checkForTaskList=e.getForBill=e.getForBalance=e.checkTaskList=e.getBill=e.getBalance=e.getPollTop=e.donate=e.getIndex=e.reply=e.getBullet=e.like=e.concern=e.addComment=e.getComment=e.findAllDyn=e.getDyn=e.getInfo=e.upInfo=e.getAllSocialInfo=e.findByID=e.changePwd=e.register=e.sendCode=e.login=void 0;var n=t.getStorageSync("USERS_KEY").token,r="http://pandla.io:8080/v1/",o=r+"system/",i=r+"fans/",a=r+"dyn/",u=r+"poll/",c=r+"pan/",s=r+"force/",f=r+"tre/",l=r+"bar/",d=r+"inv/",p=function(e,r){t.request({url:o+"login",method:"POST",data:{name:e,password:r},header:{"content-type":"application/json"},success:function(e){200==e.data.status?(t.setStorageSync("USERS_KEY",e.data.data),n=t.getStorageSync("USERS_KEY").token,t.reLaunch({url:"../main/main"})):t.showToast({icon:"none",title:e.data.msg})},fail:function(e){t.showToast({icon:"none",title:"登錄失敗，請稍后重試"})}})};e.login=p;var h=function(e,n,r){t.request({url:o+"sendCode",data:{parame:e},success:function(){return t.showToast({icon:"none",title:"發送成功"}),n.btnStatus=!0,r=setInterval(function(){var t=n.codeTime;t--,n.codeTime=t,n.text="重發("+t+")秒",t<1&&(clearInterval(r),n.text="重新獲取",n.codeTime="60",n.btnStatus=!1)},1e3),!1},fail:function(){t.showToast({icon:"none",title:"發送失败了，请稍后重试"})}})};e.sendCode=h;var v=function(e,n,r,i){t.request({url:o+"register",method:"POST",data:{password:e,account:n,regCode:r,inviteCode:i},header:{"content-type":"application/json"},success:function(e){200==e.data.status?(t.showToast({icon:"none",title:"注冊成功"}),t.setStorageSync("USERS_KEY",e.data.data),t.reLaunch({url:"../user/update"})):t.showToast({icon:"none",title:e.data.msg})},fail:function(e){t.showToast({icon:"none",title:"發送失败了，请稍后重试"})}})};e.register=v;var g=function(e,n,r){t.request({url:o+"changePwd",method:"POST",data:{parame:n,code:r,password:e},success:function(e){1==e.data?t.redirectTo({url:"../login/login"}):t.showToast({icon:"none",title:"修改失敗，新密碼不可以與舊密碼相同"})},fail:function(){t.showToast({icon:"none",title:"修改失敗，請稍後重試"})}})};e.changePwd=g;var y=function(){return new Promise(function(e,r){t.request({url:o+"findByID",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.findByID=y;var _=function(){return new Promise(function(e,r){t.request({url:i+"getAllFans",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getAllSocialInfo=_;var m=function(e,n){return new Promise(function(r,i){t.request({url:o+"updata",method:"POST",data:{acctType:e.acctType,age:e.age,name:e.name,race:e.race,signature:e.signature,site:e.site,stature:e.stature,weight:e.weight,id:n},header:{"content-type":"application/json"},success:function(e){200==e.data.status?(t.getStorageSync("USERS_KEY").token?t.switchTab({url:"user"}):t.reLaunch({url:"../login/login"}),r(e.data.status)):t.showToast({icon:"none",title:"提交失败，没有修改"})},fail:function(e){t.showToast({icon:"none",title:e.data.msg})}})})};e.upInfo=m;var w=function(e){return new Promise(function(r,o){t.request({url:a+"getInfo?uid="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getInfo=w;var b=function(e){return new Promise(function(r,o){t.request({url:a+"getDyn?uid="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getDyn=b;var $=function(){return new Promise(function(e,r){t.request({url:a+"findAllDyn",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.findAllDyn=$;var O=function(e){return new Promise(function(r,o){t.request({url:a+"getComment?did="+e,header:{token:n},success:function(t){console.log(t.data.data," at api/api.js:336"),200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getComment=O;var k=function(e,r){return new Promise(function(o,i){t.request({url:a+"createCom?did="+r+"&content="+e,header:{token:n},success:function(t){200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.addComment=k;var P=function(e,r){return new Promise(function(o,a){t.request({url:i+"concern?gid="+r+"&type="+e,header:{token:n},success:function(n){200==n.data.status&&(2==e&&t.showToast({icon:"none",title:"已取消關注"}),o(n.data.data))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),a(e)}})})};e.concern=P;var A=function(e,r){return new Promise(function(o,i){t.request({url:a+"like?did="+e+"&likeNumber="+r,method:"POST",header:{token:n},success:function(e){200==e.data.status&&o(e.data.data),404==e.data.status&&t.showToast({icon:"none",title:"余额不足"})},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.like=A;var T=function(e){return new Promise(function(r,o){t.request({url:a+"getBullet?did="+e,header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getBullet=T;var x=function(e,r){return new Promise(function(o,i){t.request({url:a+"reply?cid="+e+"&content="+r,header:{token:n},success:function(t){200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.reply=x;var E=function(){return new Promise(function(e,r){t.request({url:u+"getIndex",header:{token:n},success:function(t){console.log(t.data," at api/api.js:485"),200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getIndex=E;var S=function(e){return new Promise(function(r,o){t.request({url:u+"donate?number="+e,method:"POST",header:{token:n},success:function(e){200==e.data.status&&(t.showToast({icon:"none",title:e.data.data}),r(e.data.data)),404==e.data.status&&(t.showToast({icon:"none",title:e.data.msg}),r(e.data.data))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.donate=S;var j=function(){return new Promise(function(e,r){t.request({url:u+"getPollTop",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getPollTop=j;var M=function(){return new Promise(function(e,r){t.request({url:c+"getBalance",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getBalance=M;var C=function(){return new Promise(function(e,r){t.request({url:c+"getBill",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getBill=C;var I=function(){return new Promise(function(e,r){t.request({url:c+"checkTaskList",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.checkTaskList=I;var B=function(){return new Promise(function(e,r){t.request({url:s+"getBalance",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getForBalance=B;var D=function(){return new Promise(function(e,r){t.request({url:s+"getBill",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.getForBill=D;var L=function(){return new Promise(function(e,r){t.request({url:s+"checkTaskList",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.checkForTaskList=L;var N=function(){return new Promise(function(e,r){t.request({url:f+"toTreIndex",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),r(e)}})})};e.toTreIndex=N;var R=function(e){return new Promise(function(r,o){t.request({url:f+"isVote?tid="+e,method:"POST",header:{token:n},success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.isVote=R;var U=function(e,r){return new Promise(function(o,i){t.request({url:f+"sysVote?tid="+e+"&isWell="+r,method:"POST",header:{token:n},success:function(t){console.log(t.data," at api/api.js:747"),200==t.data.status&&o(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),i(e)}})})};e.sysVote=U;var F=function(e){return new Promise(function(r,o){t.request({url:l+"getBarList?location="+e,header:{token:n},success:function(t){console.log(t.data," at api/api.js:770"),200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.getBarList=F;var V=function(e){return new Promise(function(r,o){t.request({url:l+"setBar",method:"POST",header:{token:n},data:e,success:function(t){200==t.data.status&&r(t.data.data)},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.setBar=V;var q=function(e,r){return new Promise(function(o,i){t.uploadFile({url:l+"upLogo?type="+r,header:{token:n},filePath:e,name:"file",success:function(e){var n=JSON.parse(e.data);o(n.data),3==r&&t.showToast({icon:"none",title:"上传成功,請等待審核"}).then(function(e){t.redirectTo({url:"entertain"})})},fail:function(e){console.log("uploadImage fail",e," at api/api.js:834"),t.showToast({icon:"none",title:"上传失败,请勿选择超过4M的图片"})}})})};e.upLogo=q;var H=function(){return new Promise(function(e,r){t.request({url:d+"getInvCode",header:{token:n},success:function(t){200==t.data.status&&e(t.data.data)}})})};e.getInvCode=H;var G=function(e){return new Promise(function(n,r){t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(r){var i=r.tempFilePaths,a=t.uploadFile({url:o+"pic/upPicture?id="+e,filePath:i[0],name:"file",success:function(e){console.log(e.data," at api/api.js:872");var r=JSON.parse(e.data);console.log("uploadImage success, res is:",r.data," at api/api.js:874"),t.showToast({title:"上传成功",icon:"success",duration:1e3}),n(r.data)},fail:function(e){console.log("uploadImage fail",e," at api/api.js:884"),t.showToast({icon:"none",title:"上传失败,请勿选择超过4M的图片"})}});a.onProgressUpdate(function(t){console.log("上传进度"+t.progress," at api/api.js:892"),console.log("已经上传的数据长度"+t.totalBytesSent," at api/api.js:893"),console.log("预期需要上传的数据总长度"+t.totalBytesExpectedToSend," at api/api.js:894")})}})})};e.upPicture=G;var z=function(){return new Promise(function(e,n){t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var n=t.tempFilePaths;e(n[0])},fail:function(){t.showToast({icon:"none",title:"出錯了，請稍後重試"})}})})};e.getImgTemp=z;var K=function(e){return new Promise(function(r,o){t.uploadFile({url:a+"upload",header:{token:n},filePath:e,name:"file",success:function(t){var e=JSON.parse(t.data);r(e.data.id)},fail:function(e){console.log("uploadImage fail",e," at api/api.js:936"),t.showToast({icon:"none",title:"上传失败,请勿选择超过4M的图片"})}})})};e.upload=K;var J=function(e){return new Promise(function(r,o){t.request({url:a+"createDyn",method:"POST",header:{token:n,"content-type":"application/json"},data:{content:e,location:""},success:function(e){200==e.data.status&&(t.showToast({icon:"success",title:"發表成功"}),r(e.data.data))},fail:function(e){t.showToast({icon:"none",title:"页面加载失败，請稍后重試"}),o(e)}})})};e.createDyn=J}).call(this,n("6e42")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cc9e:function(t,e,n){},cdd9:function(t,e,n){"use strict";var r,o=i(n("603b"));function i(t){return t&&t.__esModule?t:{default:t}}console.log("生产环境"," at api/apiUrl.js:7"),r="http://printsn.com:8080",o.default.setConfig({baseUrl:r,dataType:"json",responseType:"text",header:{"content-type":"application/json"}})},d30c:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.skipIndex=void 0;var n=function(){var e="";t.getStorage({key:"USERS_KEY",success:function(t){e=t.data.token}}),e&&t.switchTab({url:"../main/main"})};e.skipIndex=n}).call(this,n("6e42")["default"])},d4e3:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("bd0c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d9c5:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("762c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e2dd:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("fb08"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e64d:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("aaf4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},eb92:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("14e7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f230:function(t,e,n){"use strict";(function(t){n("cc9e");var e=c(n("66fd")),r=c(n("eabc")),o=c(n("aad3")),i=c(n("0732")),a=c(n("a7e3"));n("cdd9");var u=c(n("603b"));function c(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default.prototype.api=a.default,e.default.prototype.$request=u.default,e.default.config.productionTip=!1,e.default.prototype.$store=o.default,Object.keys(i.default).forEach(function(t){e.default.filter(t,i.default[t])}),r.default.mpType="app";var l=new e.default(s({store:o.default},r.default));t(l).$mount()}).call(this,n("6e42")["createApp"])},f50c:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("4b63"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f583:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("7cef"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},fc20:function(t,e,n){"use strict";(function(e){var n="http://47.244.27.153/images/json/",r=function(){return new Promise(function(t,r){e.request({url:n+"slider.json",success:function(e){t(e.data.index)}})})},o=function(){return new Promise(function(t,r){e.request({url:n+"slider.json",success:function(e){t(e.data.main)}})})},i=function(){return new Promise(function(t,r){e.request({url:n+"user.json",success:function(e){t(e.data.invList)}})})};t.exports={indexSlider:r,mainSlider:o,invList:i}}).call(this,n("6e42")["default"])},fddf:function(t,e,n){"use strict";(function(t){n("cc9e");r(n("66fd"));var e=r(n("3e38"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/barrage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/barrage.js';

define('components/barrage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/barrage"], {
  "4d52": function d52(t, n, e) {
    "use strict";

    var o = e("bff2"),
        a = e.n(o);
    a.a;
  },
  7284: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("ac7a"),
        a = e("c1f0");

    for (var r in a) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(r);
    }

    e("4d52");
    var u = e("2877"),
        i = Object(u["a"])(a["default"], o["a"], o["b"], !1, null, "71ef8f6c", null);
    n["default"] = i.exports;
  },
  ac7a: function ac7a(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  bff2: function bff2(t, n, e) {},
  c1f0: function c1f0(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("f52e"),
        a = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = a.a;
  },
  f52e: function f52e(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        data: function data() {
          return {
            title: "video",
            src: "",
            inputValue: "",
            danmuList: [{
              text: "第 1s 出现的弹幕",
              color: "#ff0000",
              time: 1
            }, {
              text: "第 3s 出现的弹幕",
              color: "#ff00ff",
              time: 3
            }]
          };
        },
        onReady: function onReady(n) {
          this.videoContext = t.createVideoContext("myVideo");
        },
        methods: {
          bindInputBlur: function bindInputBlur(t) {
            this.inputValue = t.target.value;
          },
          bindButtonTap: function bindButtonTap() {
            t.chooseVideo({
              sourceType: ["album", "camera"],
              maxDuration: 60,
              camera: ["front", "back"],
              success: function success(t) {
                this.src = t.tempFilePath;
              }
            });
          },
          bindSendDanmu: function bindSendDanmu() {
            this.videoContext.sendDanmu({
              text: this.inputValue,
              color: this.getRandomColor()
            });
          },
          videoErrorCallback: function videoErrorCallback(t) {
            console.log("视频错误信息:", " at components/barrage.vue:70"), console.log(t.target.errMsg, " at components/barrage.vue:71");
          },
          getRandomColor: function getRandomColor() {
            for (var t = [], n = 0; n < 3; ++n) {
              var e = Math.floor(256 * Math.random()).toString(16);
              e = 1 == e.length ? "0" + e : e, t.push(e);
            }

            return "#" + t.join("");
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/barrage-create-component', {
  'components/barrage-create-component': function componentsBarrageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("7284"));
  }
}, [['components/barrage-create-component']]]);
});
require('components/barrage.js');
__wxRoute = 'components/im-chat/chatinput';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/chatinput.js';

define('components/im-chat/chatinput.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/chatinput"], {
  "0642": function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  "3a34": function a34(t, n, e) {
    "use strict";

    var u = e("f22c"),
        a = e.n(u);
    a.a;
  },
  "4b42": function b42(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("6e08"),
        a = e.n(u);

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  "60b4": function b4(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0642"),
        a = e("4b42");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("3a34");
    var c = e("2877"),
        o = Object(c["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "6e08": function e08(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "chat-input",
      data: function data() {
        return {
          inputValue: ""
        };
      },
      methods: {
        startRecognize: function startRecognize() {
          var t = {},
              n = this;
          t.engine = "iFly", n.inputValue = "", plus.speech.startRecognize(t, function (t) {
            console.log(t, " at components/im-chat/chatinput.vue:30"), n.inputValue += t;
          }, function (t) {
            console.log("语音识别失败：" + t.message, " at components/im-chat/chatinput.vue:33");
          });
        },
        sendMessge: function sendMessge() {
          var t = this;
          "" == t.inputValue.trim() ? t.inputValue = "" : (this.$emit("send-message", {
            type: "text",
            content: t.inputValue
          }), t.inputValue = "");
        }
      }
    };
    n.default = u;
  },
  f22c: function f22c(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/chatinput-create-component', {
  'components/im-chat/chatinput-create-component': function componentsImChatChatinputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("60b4"));
  }
}, [['components/im-chat/chatinput-create-component']]]);
});
require('components/im-chat/chatinput.js');
__wxRoute = 'components/im-chat/messageshow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/im-chat/messageshow.js';

define('components/im-chat/messageshow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/im-chat/messageshow"], {
  "79b2": function b2(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: ["message", "id"]
    };
    t.default = u;
  },
  "807d": function d(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("d568"),
        r = e("e5bc");

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    e("8870");
    var c = e("2877"),
        o = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = o.exports;
  },
  8870: function _(n, t, e) {
    "use strict";

    var u = e("d815"),
        r = e.n(u);
    r.a;
  },
  d568: function d568(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  },
  d815: function d815(n, t, e) {},
  e5bc: function e5bc(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("79b2"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/im-chat/messageshow-create-component', {
  'components/im-chat/messageshow-create-component': function componentsImChatMessageshowCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("807d"));
  }
}, [['components/im-chat/messageshow-create-component']]]);
});
require('components/im-chat/messageshow.js');
__wxRoute = 'components/logo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/logo.js';

define('components/logo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/logo"], {
  "0255": function _(n, t, u) {
    "use strict";

    var e = function e() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    u.d(t, "a", function () {
      return e;
    }), u.d(t, "b", function () {
      return a;
    });
  },
  "300a": function a(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("0255"),
        a = u("4dda");

    for (var r in a) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return a[n];
        });
      }(r);
    }

    u("82f0");
    var f = u("2877"),
        o = Object(f["a"])(a["default"], e["a"], e["b"], !1, null, "5f933258", null);
    t["default"] = o.exports;
  },
  "4dda": function dda(n, t, u) {
    "use strict";

    u.r(t);
    var e = u("959b"),
        a = u.n(e);

    for (var r in e) {
      "default" !== r && function (n) {
        u.d(t, n, function () {
          return e[n];
        });
      }(r);
    }

    t["default"] = a.a;
  },
  "6f4f": function f4f(n, t, u) {},
  "82f0": function f0(n, t, u) {
    "use strict";

    var e = u("6f4f"),
        a = u.n(e);
    a.a;
  },
  "959b": function b(n, t, u) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var e = {
      data: function data() {
        return {};
      },
      props: ["slogan"]
    };
    t.default = e;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/logo-create-component', {
  'components/logo-create-component': function componentsLogoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("300a"));
  }
}, [['components/logo-create-component']]]);
});
require('components/logo.js');
__wxRoute = 'components/m-icon/m-icon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-icon/m-icon.js';

define('components/m-icon/m-icon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-icon/m-icon"], {
  "0631": function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("b8cf"),
        c = e("a057");

    for (var r in c) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(r);
    }

    e("786b");
    var i = e("2877"),
        o = Object(i["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  "786b": function b(t, n, e) {
    "use strict";

    var u = e("fcb7"),
        c = e.n(u);
    c.a;
  },
  "9efd": function efd(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      props: {
        type: String,
        color: String,
        size: {
          type: [Number, String],
          default: 24
        }
      },
      computed: {
        fontSize: function fontSize() {
          var t = Number(this.size);
          return t = isNaN(t) ? 24 : t, "".concat(t, "px");
        }
      },
      methods: {
        onClick: function onClick() {
          this.$emit("click");
        }
      }
    };
    n.default = u;
  },
  a057: function a057(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("9efd"),
        c = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = c.a;
  },
  b8cf: function b8cf(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return c;
    });
  },
  fcb7: function fcb7(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-icon/m-icon-create-component', {
  'components/m-icon/m-icon-create-component': function componentsMIconMIconCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0631"));
  }
}, [['components/m-icon/m-icon-create-component']]]);
});
require('components/m-icon/m-icon.js');
__wxRoute = 'components/m-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/m-input.js';

define('components/m-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/m-input"], {
  "06c8": function c8(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("d786"),
        i = e.n(u);

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    n["default"] = i.a;
  },
  4823: function _(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return i;
    });
  },
  8544: function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("4823"),
        i = e("06c8");

    for (var o in i) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(o);
    }

    e("b99f");
    var r = e("2877"),
        a = Object(r["a"])(i["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = a.exports;
  },
  b99f: function b99f(t, n, e) {
    "use strict";

    var u = e("d0f4"),
        i = e.n(u);
    i.a;
  },
  d0f4: function d0f4(t, n, e) {},
  d786: function d786(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var u = function u() {
      return e.e("components/m-icon/m-icon").then(e.bind(null, "0631"));
    },
        i = {
      components: {
        mIcon: u
      },
      props: {
        type: String,
        value: String,
        placeholder: String,
        clearable: {
          type: [Boolean, String],
          default: !1
        },
        displayable: {
          type: [Boolean, String],
          default: !1
        },
        focus: {
          type: [Boolean, String],
          default: !1
        }
      },
      model: {
        prop: "value",
        event: "input"
      },
      data: function data() {
        return {
          showPassword: !1,
          isFocus: !1
        };
      },
      computed: {
        inputType: function inputType() {
          var t = this.type;
          return "password" === t ? "text" : t;
        },
        clearable_: function clearable_() {
          return "false" !== String(this.clearable);
        },
        displayable_: function displayable_() {
          return "false" !== String(this.displayable);
        },
        focus_: function focus_() {
          return "false" !== String(this.focus);
        }
      },
      methods: {
        clear: function clear() {
          this.$emit("input", "");
        },
        display: function display() {
          this.showPassword = !this.showPassword;
        },
        onFocus: function onFocus() {
          this.isFocus = !0;
        },
        onBlur: function onBlur() {
          var t = this;
          this.$nextTick(function () {
            t.isFocus = !1;
          });
        },
        onInput: function onInput(t) {
          this.$emit("input", t.target.value);
        }
      }
    };

    n.default = i;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/m-input-create-component', {
  'components/m-input-create-component': function componentsMInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8544"));
  }
}, [['components/m-input-create-component']]]);
});
require('components/m-input.js');
__wxRoute = 'components/wm-poster/wm-poster';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/wm-poster/wm-poster.js';

define('components/wm-poster/wm-poster.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wm-poster/wm-poster"], {
  "0774": function _(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i,
          r = a(n("a34a"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function l(t, e, n, i, r, a, l) {
        try {
          var c = t[a](l),
              u = c.value;
        } catch (o) {
          return void n(o);
        }

        c.done ? e(u) : Promise.resolve(u).then(i, r);
      }

      function c(t) {
        return function () {
          var e = this,
              n = arguments;
          return new Promise(function (i, r) {
            var a = t.apply(e, n);

            function c(t) {
              l(a, i, r, c, u, "next", t);
            }

            function u(t) {
              l(a, i, r, c, u, "throw", t);
            }

            c(void 0);
          });
        };
      }

      var u = {
        name: "wm-poster",
        props: {
          CanvasID: {
            Type: String,
            default: "PosterCanvas"
          },
          imgSrc: {
            Type: String,
            default: ""
          },
          QrSrc: {
            Type: String,
            default: ""
          },
          Title: {
            Type: String,
            default: ""
          },
          TitleColor: {
            Type: String,
            default: "#333333"
          },
          LineType: {
            Type: [String, Boolean],
            default: !0
          },
          PriceTxt: {
            Type: String,
            default: "99.99"
          },
          PriceColor: {
            Type: String,
            default: "#000000"
          },
          OriginalTxt: {
            Type: String,
            default: ""
          },
          OriginalColor: {
            Type: String,
            default: "#b8b8b8"
          },
          Width: {
            Type: String,
            default: 750
          },
          CanvasBg: {
            Type: String,
            default: "#ffffff"
          },
          Referrer: {
            Type: String,
            default: "潘多拉星球内測1.0歡迎您"
          },
          ViewDetails: {
            Type: String,
            default: "长按或扫描识别二维码"
          }
        },
        data: function data() {
          return {
            canvasW: 0,
            canvasH: 0,
            canvasImgSrc: "",
            ctx: null
          };
        },
        methods: {
          OnCanvas: function () {
            var e = c(r.default.mark(function e() {
              var n, a, l, c, u, o, s, f, x, p, d, g, T;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return t.showLoading({
                        title: "生成海報中"
                      }), i.ctx = t.createCanvasContext(i.CanvasID, this), n = t.upx2px(i.Width), a = t.upx2px(0), l = t.upx2px(180), c = 0, e.next = 6, i.getImageInfo({
                        imgSrc: i.imgSrc
                      });

                    case 6:
                      return u = e.sent, e.next = 9, i.getImageInfo({
                        imgSrc: i.QrSrc
                      });

                    case 9:
                      o = e.sent, s = [u.width, u.height], f = [o.width, o.height], x = n, s[0] != x && (s[1] = Math.floor(x / s[0] * s[1]), s[0] = x), f[0] != l && (f[1] = Math.floor(l / f[0] * f[1]), f[0] = l), i.canvasW = n, i.canvasH = s[1] + f[1] + 28, i.ctx.setFillStyle(i.CanvasBg), i.ctx.fillRect(0, 0, n, i.canvasH), i.ctx.drawImage(u.path, a, a, s[0], s[1]), i.ctx.setFontSize(t.upx2px(30)), i.ctx.setFillStyle(i.TitleColor), p = 0, d = s[1] + 2 * a + 10, g = 1, T = 0;

                    case 26:
                      if (!(T < i.Title.length)) {
                        e.next = 48;
                        break;
                      }

                      if (c += i.ctx.measureText(i.Title[T]).width, !(c > s[0])) {
                        e.next = 44;
                        break;
                      }

                      if (2 != g || !i.LineType) {
                        e.next = 37;
                        break;
                      }

                      return i.ctx.fillText(i.Title.substring(p, T - 8) + "...", a, d), c = 0, p = T, g++, e.abrupt("break", 48);

                    case 37:
                      i.ctx.fillText(i.Title.substring(p, T), a, d), c = 0, d += 20, p = T, g++;

                    case 42:
                      e.next = 45;
                      break;

                    case 44:
                      T == i.Title.length - 1 && (i.ctx.fillText(i.Title.substring(p, T + 1), a, d + t.upx2px(70)), c = 0);

                    case 45:
                      T++, e.next = 26;
                      break;

                    case 48:
                      c = a, d += t.upx2px(20), "" != i.PriceTxt && (i.ctx.setFillStyle(i.PriceColor), i.ctx.setFontSize(t.upx2px(38)), i.ctx.fillText(i.PriceTxt, c, d), c += i.ctx.measureText(i.PriceTxt).width + t.upx2px(10)), "" != i.PriceTxt && "" != i.OriginalTxt && (i.ctx.setFillStyle(i.OriginalColor), i.ctx.setFontSize(t.upx2px(24)), i.ctx.fillText(i.OriginalTxt, c, d)), i.ctx.strokeStyle = i.OriginalColor, i.ctx.moveTo(c, d - t.upx2px(10)), i.ctx.lineTo(c + i.ctx.measureText(i.OriginalTxt).width, d - t.upx2px(10)), i.ctx.stroke(), d -= t.upx2px(30), i.ctx.drawImage(o.path, s[0] - f[0] + a, d, f[0], f[1]), i.ctx.setFillStyle(i.TitleColor), i.ctx.setFillStyle(i.OriginalColor), i.ctx.setFontSize(t.upx2px(24)), i.ctx.fillText(i.Referrer, a, d + t.upx2px(50) + f[1] / 2), i.ctx.setFillStyle(i.OriginalColor), i.ctx.setFontSize(t.upx2px(24)), i.ctx.fillText(i.ViewDetails, a, d + t.upx2px(50) + f[1] / 2 + 20), setTimeout(function () {
                        i.ctx.draw(!0, function (t) {
                          i.getNewImage();
                        });
                      }, 600);

                    case 66:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n() {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getImageInfo: function () {
            var e = c(r.default.mark(function e(n) {
              var i;
              return r.default.wrap(function (e) {
                while (1) {
                  switch (e.prev = e.next) {
                    case 0:
                      return i = n.imgSrc, e.abrupt("return", new Promise(function (e, n) {
                        t.getImageInfo({
                          src: i,
                          success: function success(t) {
                            e(t);
                          },
                          fail: function fail(t) {
                            n(t);
                          }
                        });
                      }));

                    case 2:
                    case "end":
                      return e.stop();
                  }
                }
              }, e, this);
            }));

            function n(t) {
              return e.apply(this, arguments);
            }

            return n;
          }(),
          getNewImage: function getNewImage() {
            t.canvasToTempFilePath({
              canvasId: i.CanvasID,
              quality: 1,
              complete: function complete(e) {
                t.hideLoading(), i.$emit("success", e);
              }
            }, this);
          }
        },
        mounted: function mounted() {
          i = this, i.OnCanvas();
        }
      };
      e.default = u;
    }).call(this, n("6e42")["default"]);
  },
  "4f66": function f66(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("0774"),
        r = n.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(a);
    }

    e["default"] = r.a;
  },
  "58aa": function aa(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("e375"),
        r = n("4f66");

    for (var a in r) {
      "default" !== a && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(a);
    }

    var l = n("2877"),
        c = Object(l["a"])(r["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  e375: function e375(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/wm-poster/wm-poster-create-component', {
  'components/wm-poster/wm-poster-create-component': function componentsWmPosterWmPosterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("58aa"));
  }
}, [['components/wm-poster/wm-poster-create-component']]]);
});
require('components/wm-poster/wm-poster.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"7b87":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("d30c"),i=t("fc20"),c={data:function(){return{slides:"",indicatorDots:!1,autoplay:!0,interval:3e3,duration:1e3,circular:!0,currentSwiper:0,sliderPercent:25}},methods:{getIndexSlider:function(){var e=this;(0,i.indexSlider)().then(function(n){e.slides=n})},sliderChange:function(){100==this.sliderPercent?this.sliderPercent=25:this.sliderPercent+=25}},onLoad:function(){(0,r.skipIndex)(),this.getIndexSlider()}};n.default=c},bb5a:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return i})},c1ab:function(e,n,t){},e1d5:function(e,n,t){"use strict";t.r(n);var r=t("bb5a"),i=t("f142");for(var c in i)"default"!==c&&function(e){t.d(n,e,function(){return i[e]})}(c);t("ec86");var u=t("2877"),a=Object(u["a"])(i["default"],r["a"],r["b"],!1,null,"5511b3f0",null);n["default"]=a.exports},ec86:function(e,n,t){"use strict";var r=t("c1ab"),i=t.n(r);i.a},f142:function(e,n,t){"use strict";t.r(n);var r=t("7b87"),i=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);n["default"]=i.a}},[["9ec5","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"15a9":function(n,t,o){},"29ab":function(n,t,o){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];o.d(t,"a",function(){return e}),o.d(t,"b",function(){return u})},"31fd":function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o("c0ba"),u=o("4204"),i=function(){return o.e("components/logo").then(o.bind(null,"300a"))},a=function(){return o.e("components/m-input").then(o.bind(null,"8544"))},r={components:{mInput:a,logo:i},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},methods:{bindLogin:function(){(0,u.joinValidate)(this.account)&&(0,u.pwdValidate)(this.password,this.password)&&(0,e.login)(this.account,this.password)}}};t.default=r},"5d7c":function(n,t,o){"use strict";o.r(t);var e=o("29ab"),u=o("6b88");for(var i in u)"default"!==i&&function(n){o.d(t,n,function(){return u[n]})}(i);o("9428");var a=o("2877"),r=Object(a["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=r.exports},"6b88":function(n,t,o){"use strict";o.r(t);var e=o("31fd"),u=o.n(e);for(var i in e)"default"!==i&&function(n){o.d(t,n,function(){return e[n]})}(i);t["default"]=u.a},9428:function(n,t,o){"use strict";var e=o("15a9"),u=o.n(e);u.a}},[["2115","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/reg/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/reg/reg.js';

define('pages/reg/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{"2acf":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"32df":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("c0ba"),r=n("4204"),o=function(){return n.e("components/m-input").then(n.bind(null,"8544"))},s=function(){return n.e("components/logo").then(n.bind(null,"300a"))},a={components:{mInput:o,logo:s},data:function(){return{nickname:"",password:"",account:"",phone:"",email:"",verifyPwd:"",regCode:"",inviteCode:"",pRegister:!0,regType:"手機注冊",btnType:"郵箱注冊",regCodeBtn:{text:"獲取驗證碼",btnStatus:!1,codeTime:60},regBtn:!0,timerId:null}},methods:{getRegCode:function(){var t=!1;t=this.pRegister?(0,r.phoneValidate)(this.account):(0,r.emailValidate)(this.account),t&&((0,i.sendCode)(this.account,this.regCodeBtn,this.timerId),this.regBtn=!1)},bindRegister:function(){(0,r.codeValidate)(this.regCode)&&(0,r.pwdValidate)(this.password,this.verifyPwd)&&(0,i.register)(this.password,this.account,this.regCode,this.inviteCode)},changeRegType:function(){1==this.pRegister?(this.regType="郵箱注冊",this.btnType="手機注冊",this.pRegister=!1):(this.regType="手機注冊",this.btnType="郵箱注冊",this.pRegister=!0),this.regBtn=!0}}};e.default=a},"391f":function(t,e,n){"use strict";var i=n("6f13"),r=n.n(i);r.a},"6f13":function(t,e,n){},"72c8":function(t,e,n){"use strict";n.r(e);var i=n("32df"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=r.a},9061:function(t,e,n){"use strict";n.r(e);var i=n("2acf"),r=n("72c8");for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);n("391f");var s=n("2877"),a=Object(s["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports}},[["a1bc","common/runtime","common/vendor"]]]);
});
require('pages/reg/reg.js');
__wxRoute = 'pages/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pwd/pwd.js';

define('pages/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{"8a61":function(t,n,e){"use strict";e.r(n);var o=e("d02a"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},bd0c:function(t,n,e){"use strict";e.r(n);var o=e("c822"),u=e("8a61");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);var c=e("2877"),i=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},c822:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},d02a:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("c0ba"),u=e("4204"),a=function(){return e.e("components/m-input").then(e.bind(null,"8544"))},c=function(){return e.e("components/logo").then(e.bind(null,"300a"))},i={components:{mInput:a,logo:c},data:function(){return{account:"",password:"",verifyPwd:"",regCode:"",regCodeBtn:{text:"獲取驗證碼",btnStatus:!1,codeTime:60},changeBtn:!1,nextBtn:!0,timerId:null,succ:!1}},methods:{getRegCode:function(){(0,u.joinValidate)(this.account)&&(this.nextBtn=!1,(0,o.sendCode)(this.account,this.regCodeBtn,this.timerId))},nextChange:function(){(0,u.codeValidate)(this.regCode)&&(this.succ=!0)},findPassword:function(){(0,u.pwdValidate)(this.password,this.verifyPwd)&&(0,o.changePwd)(this.password,this.account,this.regCode)}}};n.default=i}},[["d4e3","common/runtime","common/vendor"]]]);
});
require('pages/pwd/pwd.js');
__wxRoute = 'pages/im-chat/im-chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/im-chat/im-chat.js';

define('pages/im-chat/im-chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/im-chat/im-chat"],{"3f4f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/im-chat/chatinput").then(n.bind(null,"60b4"))},i=function(){return n.e("components/im-chat/messageshow").then(n.bind(null,"807d"))},c={data:function(){return{name:"xcecd@qq.com",style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},scrollTop:0,messages:[{user:"home",type:"head",content:"你好!"}]}},components:{chatInput:o,messageShow:i},onLoad:function(){var e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight-t.getSystemInfoSync().screenWidth/750*100},methods:{getInputMessage:function(t){this.addMessage("customer",t.content,!1),this.toRobot(t.content)},addMessage:function(t,e,n,o){var i=this;i.messages.push({user:t,content:e,hasSub:n,subcontent:o})},scrollToBottom:function(){var e=this,n=t.createSelectorQuery();n.selectAll(".m-item").boundingClientRect(),n.select("#scrollview").boundingClientRect(),n.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){e.style.mitemHeight=e.style.mitemHeight+t.height+20}),e.style.mitemHeight>e.style.contentViewHeight&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight)})},toRobot:function(e){var n=this,o="http://www.tuling123.com/openapi/api";t.request({url:o,data:{key:"acfbca724ea1b5db96d2eef88ce677dc",info:e,userid:"uni-test"},success:function(t){console.log("s",t," at pages/im-chat/im-chat.vue:93"),n.addMessage("home",t.data.text,!1),n.scrollToBottom(),console.log("request success:"+t.data.text," at pages/im-chat/im-chat.vue:96")},fail:function(e){console.log("request fail",e," at pages/im-chat/im-chat.vue:99"),t.showModal({content:e.errMsg,showCancel:!1})}})}}};e.default=c}).call(this,n("6e42")["default"])},"4ca0":function(t,e,n){},"7cef":function(t,e,n){"use strict";n.r(e);var o=n("a327"),i=n("ddb2");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("a50e");var s=n("2877"),a=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},a327:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},a50e:function(t,e,n){"use strict";var o=n("4ca0"),i=n.n(o);i.a},ddb2:function(t,e,n){"use strict";n.r(e);var o=n("3f4f"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a}},[["f583","common/runtime","common/vendor"]]]);
});
require('pages/im-chat/im-chat.js');
__wxRoute = 'pages/main/main';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/main/main.js';

define('pages/main/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"1d9d":function(A,I,M){},4225:function(A,I,M){"use strict";var E=M("1d9d"),C=M.n(E);C.a},aaa8:function(A,I,M){"use strict";M.r(I);var E=M("ae7c"),C=M("c4a2");for(var g in C)"default"!==g&&function(A){M.d(I,A,function(){return C[A]})}(g);M("4225");var i=M("2877"),z=Object(i["a"])(C["default"],E["a"],E["b"],!1,null,"fe9cb780",null);I["default"]=z.exports},ae7c:function(A,I,M){"use strict";var E=function(){var A=this,I=A.$createElement,M=(A._self._c,Math.random()),E=Math.random();A.$mp.data=Object.assign({},{$root:{g0:M,g1:E}})},C=[];M.d(I,"a",function(){return E}),M.d(I,"b",function(){return C})},b9dc:function(A,I,M){"use strict";(function(A){Object.defineProperty(I,"__esModule",{value:!0}),I.default=void 0;var E=g(M("a34a")),C=M("fc20");M("2f62");function g(A){return A&&A.__esModule?A:{default:A}}function i(A,I,M,E,C,g,i){try{var z=A[g](i),D=z.value}catch(w){return void M(w)}z.done?I(D):Promise.resolve(D).then(E,C)}function z(A){return function(){var I=this,M=arguments;return new Promise(function(E,C){var g=A.apply(I,M);function z(A){i(g,E,C,z,D,"next",A)}function D(A){i(g,E,C,z,D,"throw",A)}z(void 0)})}}var D={data:function(){return{slides:"",indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,circular:!1,currentSwiper:0,tokens:[],tokenList:[],bgColor:"",bgColor1:"",bgImage1:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjM5cHgiIGhlaWdodD0iMTgycHgiIHZpZXdCb3g9IjAgMCAyMzkgMTgyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4yICg3MjY0MykgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+5pif55CDMTExMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMC4zODg2Mzc0MzcgMC45MTA4NjI4NTggMTgwLjQ5NzAyNyAwLjkxMDg2Mjg1OCAxODAuNDk3MDI3IDE4MS42NDIyMjkgMC4zODg2Mzc0MzcgMTgxLjY0MjIyOSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuaYn+eQgzExMTEiPgogICAgICAgICAgICA8ZyBpZD0i5YiG57uEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgLTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMzLjI4OTYzLDY1IEMyMzEuMjExNDA4LDY1IDIyOS4zMTAzMDgsNjMuNjE4NTEzMiAyMjguNzQ3NDU2LDYxLjUyMzQxMDYgQzIyNy45MzI2OTksNTguNDk1MTE4MiAyMjMuNzU2NTc1LDU1LjgzODAxMDYgMjE2Ljk5MDU0Nyw1NC4wMzY5ODA1IEMyMTUuOTY3MTgsNTMuNzY2NDMzOCAyMTQuODkxMzMzLDUzLjUxNDE4NTEgMjEzLjc2NDMxNyw1My4yODU0NjIxIEMyMTEuMjE5MDIxLDUyLjc2NjU4NzYgMjA5LjU3NjM4Niw1MC4yODk4NDQ0IDIxMC4wOTU5NDEsNDcuNzUxNjcyOCBDMjEwLjYxODEyMSw0NS4yMTYxMTUxIDIxMy4wOTY1MDUsNDMuNTcwNjE2NiAyMTUuNjUwOTg2LDQ0LjA5ODYzOTkgQzIxNi45NjI5OTQsNDQuMzY2NTcyNSAyMTguMjE5ODk5LDQ0LjY1OTMzOCAyMTkuNDE3NzYzLDQ0Ljk3ODI0MzIgQzIyOS44NjkyMjMsNDcuNzU4MjA3NyAyMzYuMDY1ODQsNTIuNTA3ODAzOSAyMzcuODM4MzY0LDU5LjA5NzYzOTkgQzIzOC41MTE0MjQsNjEuNTk3OTA4OSAyMzcuMDIwOTgyLDY0LjE2ODc1NTMgMjM0LjUxMTExLDY0LjgzNzkzMzQgQzIzNC4xMDMwNzUsNjQuOTQ5MDI3NCAyMzMuNjkzNzI4LDY1IDIzMy4yODk2Myw2NSIgaWQ9IkZpbGwtMSIgZmlsbD0iIzJGMjcyNSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS43NTk0NzcwOSwxMjEuMDI1OTMzIEM5LjY0ODQ5ODA3LDEyMC42MTQ1OTMgOS41OTIzNDAwMSwxMjAuMTk1MzE2IDkuNTkyMzQwMDEsMTE5LjczMTA3IEM5LjU4Njk5MTYyLDExOC41NDU5ODcgOS45OTA3OTQ4MywxMTYuOTY4MDc5IDExLjA5NTIzNjcsMTE1LjAxOTgzMyBDMTIuOTk5MjYyNCwxMTEuNjE1MzYzIDE3LjAzMzI4MzIsMTA3LjMzMTMzNyAyMi44OTExMDM5LDEwMi44OTM4ODYgQzI2LjU4NDE2NSwxMDAuMDc5MzEyIDMwLjk4NTg4NzMsOTcuMTg2NzAyNiAzNiw5NC4yNzgyMjEzIEwzNC43NTExNTE3LDg0IEMyNS4zOTE0NzQ3LDg5LjEzNDQ4MTQgMTYuMzk1NDg4MSw5NS4wODIzODUzIDkuNjI1NzY3NDIsMTAxLjcyNTk5NyBDNi43NDI5ODY5MiwxMDQuNTYzMDU2IDQuNDExMDkwMjYsMTA3LjQxNDY2NCAyLjcyNjM0ODQxLDExMC4zODEzNDEgQzEuMDUwOTY2MjMsMTEzLjMzODc2IDAuMDA0MDE5NTA5NDMsMTE2LjQ3MDc2NyA4LjIxOTMwNDY0ZS0wNiwxMTkuNzMxMDcgQy0wLjAwMTMyODg3NzQsMTIwLjk5MDIyMiAwLjE2MDQ1OTgyNCwxMjIuMjUzMzQxIDAuNDkzMzk2OTA1LDEyMy40ODA3NSBDMS4xODA2NjQ2MSwxMjYuMDEyMjc5IDMuODEwNzMzODQsMTI3LjUxNDc5NiA2LjM2ODU5OTg0LDEyNi44Mzc2MDUgQzguOTI3ODAyOTQsMTI2LjE1OTA5MiAxMC40NDU0MDc3LDEyMy41NTc0NjMgOS43NTk0NzcwOSwxMjEuMDI1OTMzIiBpZD0iRmlsbC0zIiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJGaWxsLTUtQ2xpcHBlZCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9InBhdGgtMSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTAuNDM4NDMzNiwxMC40MjE4ODg2IEw5MC40Mzg0MzM2LDEwLjQyMTg4ODYgQzgzLjQ0NjgxMzEsMTAuNDIxODg4NiA3Ni40MzkzMzg3LDExLjMzNDA3NzQgNjkuNTkxNzI1NSwxMy4xNzQzNjUxIEMyNi42ODE1MTM5LDI0LjcxMzI4NzEgMS4xMjQ4NDIzNCw2OS4xMzQ3NTYxIDEyLjYyMTY0NTMsMTEyLjE5NzIyMyBDMTcuNTk0NTIxMiwxMzAuODI1NDk1IDI5LjA2MDkzNzIsMTQ3LjA4MTgxMiA0NC45MDcwMjQ4LDE1Ny45Njk3MzkgQzY0LjM1MTk3MzcsMTcxLjMzMDM4NyA4OC41NDkxNjM1LDE3NS40ODQyOTMgMTExLjI5NDM5LDE2OS4zNjk0NDYgQzE1NC4yMDU5MjMsMTU3LjgzMDUyNCAxNzkuNzYxMjczLDExMy40MDkwNTUgMTY4LjI2NDQ3LDcwLjM0NTI2MjQgQzE2Mi4xNjg2MDEsNDcuNTE4MDA1IDE0Ni40ODUwMTgsMjguNTY2MjIzOCAxMjUuMjMyNzExLDE4LjM0Nzg1NCBDMTE0LjMwMjY4OSwxMy4wOTM0ODc5IDEwMi4zOTg5NjYsMTAuNDIxODg4NiA5MC40Mzg0MzM2LDEwLjQyMTg4ODYgTTkwLjQyMzkwMDcsMTgxLjY0Mjg5MiBDNzIuNDUwNzMyOCwxODEuNjQyODkyIDU0LjcxMDA5MDUsMTc2LjIzMjA3NSAzOS41NTEwMTAyLDE2NS44MTg4MDUgQzIxLjg0MDc1NDcsMTUzLjY0ODc3NSA5LjAyNTQyNjI4LDEzNS40NzkyNDkgMy40NjcyNzI5OSwxMTQuNjU5MzM3IEMtOS4zODM3MjcwMSw2Ni41Mjk0NDk3IDE5LjE3ODYwMTUsMTYuODgyNzgzNCA2Ny4xMzgzMTY4LDMuOTg2MTg1MTMgQzg3Ljg4NTkzNzIsLTEuNTkwMzYzOSAxMDkuOTczMjIyLDAuNDYyMDYwNzA4IDEyOS4zMjgzMzEsOS43Njk1Njc2NSBDMTUzLjA3NzY0NSwyMS4xODkxNjI3IDE3MC42MDgyMjIsNDIuMzcxMDMzMiAxNzcuNDE4ODQyLDY3Ljg4NDQ3NDIgQzE5MC4yNjg1MjEsMTE2LjAxMTcxIDE2MS43MDc1MTQsMTY1LjY1OTcwMiAxMTMuNzQ3Nzk5LDE3OC41NTYzIEMxMDYuMDU3MjgsMTgwLjYyNDYzNSA5OC4yMTg3OTEyLDE4MS42NDI4OTIgOTAuNDIzOTAwNywxODEuNjQyODkyIiBpZD0iRmlsbC01IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ni40NDk2Mzc0LDE0MC4yODk5MjggQzIxLjY3ODA3MTYsMTQwLjI4OTkyOCAzLjM5OTM2ODA3LDEzNS4yNzYzOTYgMC4xNjM1MjAyODQsMTIzLjIyMjI3NiBDLTAuNTE2NDU3NTQyLDEyMC42OTc2OTUgMC45ODYzNzI4MjksMTE4LjEwMTg0OSAzLjUxODQzMDM0LDExNy40MjYxNjQgQzYuMDQ3ODQyMDIsMTE2LjczODYwMSA4LjY1MDAxMzk3LDExOC4yNDU2OTYgOS4zMjg2Njg4OSwxMjAuNzcyOTE3IEMxMi40MDg0MTI4LDEzMi4yMjc4OTQgNTguNTQ5MDA5NCwxMzcuMDIxMDM2IDEyNi43MDk1MSwxMTguODAzOTI4IEMxOTQuODY2MDQzLDEwMC41ODQxODEgMjMyLjQyNjIxOSw3My40MTk1MjE2IDIyOS4zNTA0NDQsNjEuOTYxOTA1NSBDMjI4LjY3MTc4OSw1OS40MzYwMDM5IDIzMC4xNzQ2MTksNTYuODQxNDc4MSAyMzIuNzA1MzU0LDU2LjE2NDQ3MzEgQzIzNS4yMzYwODgsNTUuNDgyMTg5NCAyMzcuODM5NTgzLDU2Ljk4NTMyNTIgMjM4LjUxNjkxNSw1OS41MTI1NDY0IEMyNDQuODk5OTc1LDgzLjI3MjM4NTIgMTg2LjkzNzgxOSwxMTIuNTA2MzMgMTI5LjE2NDgzOSwxMjcuOTQ2Nzk0IEMxMDAuNjk4Mzc0LDEzNS41NTc0OTIgNzAuNTEwNzk4MywxNDAuMjg5OTI4IDQ2LjQ0OTYzNzQsMTQwLjI4OTkyOCBMMjI0LjA2MjUsMTU3IiBpZD0iRmlsbC03IiBmaWxsPSIjMkYyNzI1IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+",bgImage2:"data:image/gif;base64,R0lGODlh7gI2Bff/AEZAPk9IRhoWFE1GRTs0MggICDc3N0Y+PFxWVEE6OCgiIEM8OlhSUEhCQD02NAYGBjcwLhUSEQQEBCYgHi4mJFpTUgICAjAoJh4ZGD43NUtEQlFKSSMdHFJMSkI7OTUuLCQeHS0oJzMsKlROTENDQyojITkyMBAODVdRTzEtLEM+PTk1NVZPTiolJC0pKDYxMD05OCchH0E9PCEcGxwXFiAbGUU9O2BYVwwKCSskIismJUdBQFJNS0VFRQoICF1XVRIPDltVU0xJSEtFQ0pDQQ4MCw0NDS8qKQgHBgEBATMwL0dEQ0xFQxkZGSMgHy4rKjgzMhgUExMQDwYFBSgkIzk0Mh4bG0lCQSsoJx8cGxoYFzc1NBcTEjMvLjArKlxVUy8sKzMuLSwlIzUwL1VPTSUlJQwMDDgxMCwnJgsLCzYzMg4ODhYWFi8nJScjIj87OkY/PUlDQQMCAhgYGBoaGhcXFyIiIkM/PgoKCg8PDzApJ1ZRUDIqKDs3NhAQEBUVFRISEiQkJBERESkpKRsbGyYmJgEAACMjIy0tLR0dHTEsKx8fHzYuLDAwMEA8OxQUFDUtKyEhIRMTEzIyMjMrKRwcHCoqKjQsKjMzMx4eHi8vLyAgIC4uLicnJ1VOTSwsLCsrKzU1NTszMTQ0NCgoKDcvLQUFBQcHBz8/PzExMQkJCTkxLy4uLTw0Mj4+PkA4NkFBQToyMEBAQDw8PBISET09PT01Mzg4ODs7Ozo6Ojw1Mzk5OQ4ODUE5NzgwLjozMUA5NwMDAzUuLTIrKTYvLTgxLzs0MzkyMTcwLzQtKw8ODhMSEjIqKRkYGBEQEEhBPw0LCx0cHCEeHRwaGgsJCRcVFS8uLSEgIBUUEy0sLBkWFSUkJCQiIiMhISgmJjExMFRNTDQsKzEvLhIRETU0MyonJkFAQCwqKjMxMRwZGBgXFy4tLQwLCzw6OSwpKCAdHBwbG0tHRh4dHU9JR1NNSyglJCYlJQ8NDCUjIzQyMiwrKiIhISAfHzEpJwAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NDVjNjYzYy05YTg4LTRiZGQtYjZhNS0yMGRkZDRkZDJmNjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk1OEFBRkE1RjUwMTFFOTk0MzdEQTZENUQ0NDhDOTAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk1OEFBRjk1RjUwMTFFOTk0MzdEQTZENUQ0NDhDOTAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MGM0MWQ2NS00ZjMwLTRhMmItOTg4My0xYzZmOWNhOTU3ZDEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNTg5NmNiYy1hNDY5LTExN2MtYTVhNy1kY2FlMjkyMGFhMjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFMgD/ACwAAAAA7gI2BQAI/wD9CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt3Djyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDi/8fT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSWaeaZaKap5ppstunmm3DGKeecdNZp55145qnnnnz26eefgAYq6KCEFmrooYgmquiijDbq6KOQRirppJRWaumlmGaq6aacdurpp6CGKuqopJZq6qmopqrqqqy26uqrsMb/KuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8cUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fTTUEct9dRUV2311VhnrfXWXHft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91K5dO5zCxkD6Va3u7JSJQd0m10lXQAEEbCid9M7qyRAgwYfHS+bSkCDIqBWvfaVlSnm+V74/qadQEDvfQPsrPxiIAb+5K9QLhADdwJYwA62VhKoEQGPPlcPFo0ANer74A17ywI0pQEILMvQHICABlLwgf+GOazielmgAPeIAA040NVhUkABHMAAF+6BhBSvuMcbs8ADcHCCCAhAqzMAQQxyQAG05rQfekCrGEoQAxBwoAYYiEIEToADJBTUx17+MpjDLOYxk7nMZj4zmtOs5jWzuc1ufjOc4yznOdO5zna+M57zrOc987nPfv4zoAMt6EETutCGPjSiE63oRTO60Y5+NKQjLelJU7rSlr40pjOt6U1zutOe/jSoQy3qUZO61KY+NapTrepVs7rVrn41rGMt61nTuta2vjWuc63rXfO6177+NbCDLexhE7vYxj42spOt7GUzu9nOfja0oy3taVO72ta+Nrazre1tc7vb3v42uMP/Le5xk7vc5j43utOt7nWzu93ufje84y3vedO73va+N77zre9987vf/v43wAMu8IETvOAGPzjCE67whTO84Q5/OMQjLvGJU7ziFr84xjOu8Y1zvOMe/zjIQy7ykZO85CY/OcpTrvKVs7zlLn85zGMu85nTvOY2vznOc67znfO85z7/OdCDLvShE73oRj860pOu9KUzvelOfzrUoy71qVO96la/OtazrvWtc73rXv862MMu9rGTvexmPzva0672tbO97W5/O9zjLve5073udr873vOu973zve9+/zvgAy/4wRO+8IY/POITr/jFM77xjn885CMv+clTvvKWvzzmM6/5/81zvvOe/zzoQy/60ZO+9KY/PepTr/rVs771rn897GMv+9nTvva2vz3uc6/73fO+977/PfCDL/zhE7/4xj8+8pOv/OUzv/nOfz70oy/96VO/+ta/Pvazr/3tc7/73v8++MMv/vGTv/zmPz/606/+9bO//e5/P/zjL//507/+9r8//vOv//3zv//+/z8ABqAADiABFqABHiACJqACLiADNqADPiAERqAETiAFVqAFXiAGZqAGbiAHdqAHfiAIhqAIjiAJlqAJniAKpqAKriALtqALviAMxqAMziAN1qAN3iAO5qAO7iAP9qAP/iAQBqEQDiERFqERHiESJqESLiETNv+hEz4hFEahFE4hFVahFV4h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",targetWidth:"",tokenWidth:"",initToken:0}},methods:{toPan:function(){A.switchTab({url:"../pan/pan"})},getMainSlider:function(){var A=this;(0,C.mainSlider)().then(function(I){A.slides=I})},getToken:function(){var I=z(E.default.mark(function I(){var M,C,g,i,z=this;return E.default.wrap(function(I){while(1)switch(I.prev=I.next){case 0:return I.next=2,this.api.homeToken().getIndexPan();case 2:M=I.sent,200==M.data.status&&(this.tokens=[.12,.23,.44,.33],0==this.tokens.length?(this.bgColor="",this.bgColor1=this.bgImage2):(this.bgColor=this.bgImage1,this.bgColor1=""),C=this.tokens.length,A.createSelectorQuery().select(".planetPublic-box").fields({size:!0},function(A){g=A.width,z.tokenWidth=g,i=A.height}).exec(),A.createSelectorQuery().select("#content").fields({size:!0},function(A){var I=A.height,M=A.width;z.targetWidth=M;var E=[];if(M<g||I<i)return!1;var D=parseInt(M/g,10),w=parseInt(I/i,10),u=D*w;if(C>=u)return!1;for(var Q=0;Q<u;Q++)E.push(Q);var B=0,N=0,O=[];while(C){var S=Math.floor(Math.random()*u);if(E[S]){delete E[S],N=parseInt(S/D,10)*g,B=S%D*i;var j={value:z.tokens[C-1],leftVal:B,topVal:N,display:"block",styleVal:{left:B+"px",top:N+"px"}};O.push(j),C--}}z.tokenList=O}).exec());case 4:case"end":return I.stop()}},I,this)}));function M(){return I.apply(this,arguments)}return M}(),pushToken:function(A,I,M){var E=this;this.initToken+=1,this.tokenList[I].leftVal=30,this.tokenList[I].topVal=-this.tokenWidth-60,setTimeout(function(){E.tokenList[I].display="none",E.takePan(A.value),E.initToken>=E.tokens.length&&(E.bgColor="",E.bgColor1=E.bgImage2)},1500)},takePan:function(){var A=z(E.default.mark(function A(I){var M;return E.default.wrap(function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,this.api.homeToken().takePan({numbers:Number(I)});case 2:M=A.sent,200==M.data.status&&console.log("成功"," at pages/main/main.vue:185");case 4:case"end":return A.stop()}},A,this)}));function I(I){return A.apply(this,arguments)}return I}()},onLoad:function(){this.getMainSlider(),this.getToken()}};I.default=D}).call(this,M("6e42")["default"])},c4a2:function(A,I,M){"use strict";M.r(I);var E=M("b9dc"),C=M.n(E);for(var g in E)"default"!==g&&function(A){M.d(I,A,function(){return E[A]})}(g);I["default"]=C.a}},[["06a2","common/runtime","common/vendor"]]]);
});
require('pages/main/main.js');
__wxRoute = 'pages/pact/pact';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pact/pact.js';

define('pages/pact/pact.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pact/pact"],{"29d3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=n("c0ba");function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{voteList:"",labelList:""}},methods:o({},(0,r.mapMutations)(["setBarText"]),{voteDetails:function(e,n,r){var a={voteName:e,voteId:n,voteStatus:r};this.setBarText(a),t.navigateTo({url:"pactVoteDetail"})},treatyIndex:function(){var t=this;(0,a.toTreIndex)().then(function(e){t.voteList=e,t.labelList=e[0]})}}),onLoad:function(){this.treatyIndex()}};e.default=c}).call(this,n("6e42")["default"])},"597a":function(t,e,n){"use strict";var r=n("e257"),a=n.n(r);a.a},"5d64":function(t,e,n){"use strict";n.r(e);var r=n("c88d"),a=n("b4fb");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("597a");var u=n("2877"),c=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,"71c9db9c",null);e["default"]=c.exports},b4fb:function(t,e,n){"use strict";n.r(e);var r=n("29d3"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a},c88d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},e257:function(t,e,n){}},[["a71a","common/runtime","common/vendor"]]]);
});
require('pages/pact/pact.js');
__wxRoute = 'pages/pact/pactVoteDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pact/pactVoteDetail.js';

define('pages/pact/pactVoteDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pact/pactVoteDetail"],{"05f8":function(t,e,o){"use strict";var n=o("7c82"),a=o.n(n);a.a},"417a":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},5253:function(t,e,o){"use strict";o.r(e);var n=o("417a"),a=o("d835");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("05f8");var c=o("2877"),u=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"bee179c2",null);e["default"]=u.exports},6660:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o("2f62");var n=o("c0ba"),a={data:function(){return{labelList:"",voteList:"",voteId:this.$store.state.voteValue.voteId,btnStatus:0==this.$store.state.voteValue.voteStatus}},methods:{treatyIndex:function(){var t=this;(0,n.toTreIndex)().then(function(e){t.labelList=e[0]}),(0,n.isVote)(this.voteId).then(function(e){t.voteList=e,t.voteList.accRatio=Math.round(t.voteList.accRatio),t.voteList.noaccRatio=Math.round(t.voteList.noaccRatio)})},vote:function(e,o){o?t.showToast({icon:"none",title:"已投票"}):(console.log("投了票"," at pages/pact/pactVoteDetail.vue:70"),(0,n.sysVote)(this.voteId,e),this.treatyIndex())}},onLoad:function(){this.treatyIndex()},onReady:function(){t.setNavigationBarTitle({title:this.$store.state.voteValue.voteName})}};e.default=a}).call(this,o("6e42")["default"])},"7c82":function(t,e,o){},d835:function(t,e,o){"use strict";o.r(e);var n=o("6660"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a}},[["7bbc","common/runtime","common/vendor"]]]);
});
require('pages/pact/pactVoteDetail.js');
__wxRoute = 'pages/daily/daily';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daily/daily.js';

define('pages/daily/daily.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/daily"],{"0db9":function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return o})},"80c4":function(n,t,i){"use strict";var e=i("94c6"),o=i.n(e);o.a},"94c6":function(n,t,i){},9661:function(n,t,i){"use strict";i.r(t);var e=i("fc1d"),o=i.n(e);for(var s in e)"default"!==s&&function(n){i.d(t,n,function(){return e[n]})}(s);t["default"]=o.a},fb08:function(n,t,i){"use strict";i.r(t);var e=i("0db9"),o=i("9661");for(var s in o)"default"!==s&&function(n){i.d(t,n,function(){return o[n]})}(s);i("80c4");var u=i("2877"),d=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,"53836494",null);t["default"]=d.exports},fc1d:function(n,t,i){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=i("c0ba"),o=function(){return i.e("components/barrage").then(i.bind(null,"7284"))},s={components:{barrage:o},data:function(){return{dynInfo:"",commentInfo:"",bulletList:"",following:!1,did:0,uid:0,cid:0,beStatus:!1,commContent:"",commplaceholder:"  為保證用戶隱私，只可以看自己的評論",addType:"",array:["取消關注","屏蔽用戶","舉報用戶"],pickIndex:0,likeNumber:0,showComment:!1}},methods:{findDyn:function(n){var t=this;(0,e.findAllDyn)().then(function(i){t.dynInfo=i,1==n&&(t.did=t.dynInfo[0].id,t.uid=t.dynInfo[0].uid),(0,e.getBullet)(t.did).then(function(n){t.bulletList=n.content})})},goBack:function(){n.switchTab({url:"../main/main"})},publishDyn:function(){var t=this;(0,e.getImgTemp)().then(function(i){t.$store.commit("setImgTemp",i),console.log(t.$store.state.imgTemp," at pages/daily/daily.vue:158"),n.navigateTo({url:"publish"})})},userFollow:function(){var n=this;0==this.following&&(0,e.concern)(1,this.uid).then(function(t){n.following=!0,n.findDyn(2)})},bindPickerChange:function(n){var t=this;this.pickIndex=n.target.value,0==n.target.value&&(this.following=!1,console.log(this.uid," at pages/daily/daily.vue:180"),(0,e.concern)(2,this.uid).then(function(n){t.findDyn()}))},behaviour:function(){0==this.beStatus?this.beStatus=!0:1==this.beStatus&&(this.beStatus=!1)},userInfo:function(){n.navigateTo({url:"/pages/daily/userInfo?uid="+this.uid})},likePerson:function(t){1==t?n.showToast({icon:"none",title:"不可以給自己點贊哦"}):((0,e.like)(this.did,1),this.findDyn(2))},endLike:function(){n.showToast({icon:"none",title:"结束触摸，点击了"+this.likeNumber+"次"})},showComm:function(){var n=this;1==this.showComment?this.showComment=!1:this.showComment=!0,(0,e.getComment)(this.did).then(function(t){n.commentInfo=t})},swiperChange:function(n){var t=this;this.following=!1,this.showComment=!1,this.addType="",this.commplaceholder="  為保證用戶隱私，只可以看自己的評論",this.commentInfo="",this.did=this.dynInfo[n.detail.current].id,this.uid=this.dynInfo[n.detail.current].uid,(0,e.getBullet)(this.did).then(function(n){t.bulletList=n.content})},addComm:function(){var n=this;""!=this.commContent&&("reply"==this.addType?(console.log("刚刚是回复"," at pages/daily/daily.vue:261"),(0,e.reply)(this.cid,this.commContent).then(function(t){n.findDyn(2),n.addType="",n.commplaceholder="  為保證用戶隱私，只可以看自己的評論"})):(console.log("刚刚是評論"," at pages/daily/daily.vue:270"),(0,e.addComment)(this.commContent,this.did).then(function(t){(0,e.getComment)(n.did).then(function(t){n.commentInfo=t,n.commContent=""}),(0,e.getBullet)(n.did).then(function(t){n.bulletList=t.content})})))},replyComm:function(t,i,e){e!=n.getStorageSync("USERS_KEY").id?(this.commplaceholder="@"+i,this.addType="reply",this.cid=t):n.showToast({icon:"none",title:"不能自己回復自己哦"})}},onShow:function(){this.findDyn(1)},onPullDownRefresh:function(){console.log("onPullDownRefresh"," at pages/daily/daily.vue:303"),this.findDyn(1),setTimeout(function(){n.stopPullDownRefresh()},1e3)}};t.default=s}).call(this,i("6e42")["default"])}},[["e2dd","common/runtime","common/vendor"]]]);
});
require('pages/daily/daily.js');
__wxRoute = 'pages/daily/publish';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daily/publish.js';

define('pages/daily/publish.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/publish"],{"02b6":function(n,t,e){"use strict";e.r(t);var a=e("57b4"),u=e("bc12");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("e3e1");var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,"54b893ef",null);t["default"]=c.exports},3319:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e("c0ba"),u={data:function(){return{imgTemp:this.$store.state.imgTemp,dynContent:"",location:"所在位置",showType:"誰可以看",remain:"提醒誰看"}},onNavigationBarButtonTap:function(){var t=this;(0,a.upload)(this.imgTemp).then(function(e){""!=e&&(0,a.createDyn)(t.dynContent).then(function(t){t&&n.navigateBack({delta:1})})})}};t.default=u}).call(this,e("6e42")["default"])},"57b4":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},7455:function(n,t,e){},bc12:function(n,t,e){"use strict";e.r(t);var a=e("3319"),u=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=u.a},e3e1:function(n,t,e){"use strict";var a=e("7455"),u=e.n(a);u.a}},[["45cc","common/runtime","common/vendor"]]]);
});
require('pages/daily/publish.js');
__wxRoute = 'pages/daily/userInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/daily/userInfo.js';

define('pages/daily/userInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/daily/userInfo"],{"0e5a":function(n,t,e){"use strict";e.r(t);var o=e("a415"),u=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=u.a},"1ac8":function(n,t,e){},"217b":function(n,t,e){"use strict";var o=e("1ac8"),u=e.n(o);u.a},"6d5f":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},a415:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e("2f62");var o=e("c0ba"),u={data:function(){return{userInfo:"",dynInfo:"",statusInfo:"",uid:""}},methods:{getUserInfo:function(){var n=this;(0,o.getInfo)(this.uid).then(function(t){n.userInfo=t}),(0,o.getDyn)(this.uid).then(function(t){n.dynInfo=t.resp})},preview:function(t){var e=[];"por"==t&&(e=[this.userInfo.portrait]),"dyn"==t&&(e=this.dynInfo),n.previewImage({urls:e,longPressActions:{itemList:[],success:function(n){console.log("选中了第"+(n.tapIndex+1)+"个按钮,第"+(n.index+1)+"张图片"," at pages/daily/userInfo.vue:72")},fail:function(n){console.log(n.errMsg," at pages/daily/userInfo.vue:75")}}})}},onLoad:function(n){this.uid=n.uid},onShow:function(){this.getUserInfo()}};t.default=u}).call(this,e("6e42")["default"])},b1c5:function(n,t,e){"use strict";e.r(t);var o=e("6d5f"),u=e("0e5a");for(var i in u)"default"!==i&&function(n){e.d(t,n,function(){return u[n]})}(i);e("217b");var a=e("2877"),r=Object(a["a"])(u["default"],o["a"],o["b"],!1,null,"5ae50531",null);t["default"]=r.exports}},[["45f0","common/runtime","common/vendor"]]]);
});
require('pages/daily/userInfo.js');
__wxRoute = 'pages/store/store';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/store.js';

define('pages/store/store.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/store"],{"0110":function(n,t,u){"use strict";var r=u("fdcb"),c=u.n(r);c.a},"29ab3":function(n,t,u){"use strict";var r=function(){var n=this,t=n.$createElement;n._self._c},c=[];u.d(t,"a",function(){return r}),u.d(t,"b",function(){return c})},"2c6f":function(n,t,u){"use strict";u.r(t);var r=u("4b11"),c=u.n(r);for(var a in r)"default"!==a&&function(n){u.d(t,n,function(){return r[n]})}(a);t["default"]=c.a},"4b11":function(n,t,u){},ac01:function(n,t,u){"use strict";u.r(t);var r=u("29ab3"),c=u("2c6f");for(var a in c)"default"!==a&&function(n){u.d(t,n,function(){return c[n]})}(a);u("0110");var e=u("2877"),o=Object(e["a"])(c["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},fdcb:function(n,t,u){}},[["b759","common/runtime","common/vendor"]]]);
});
require('pages/store/store.js');
__wxRoute = 'pages/game/game';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/game/game.js';

define('pages/game/game.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/game/game"],{"76a9":function(n,t,a){"use strict";var e=a("da49"),u=a.n(e);u.a},bcc8:function(n,t,a){"use strict";a.r(t);var e=a("e600"),u=a("ead6");for(var r in u)"default"!==r&&function(n){a.d(t,n,function(){return u[n]})}(r);a("76a9");var c=a("2877"),o=Object(c["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=o.exports},d9f3:function(n,t,a){},da49:function(n,t,a){},e600:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return u})},ead6:function(n,t,a){"use strict";a.r(t);var e=a("d9f3"),u=a.n(e);for(var r in e)"default"!==r&&function(n){a.d(t,n,function(){return e[n]})}(r);t["default"]=u.a}},[["bf2a","common/runtime","common/vendor"]]]);
});
require('pages/game/game.js');
__wxRoute = 'pages/nearby/nearby';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/nearby/nearby.js';

define('pages/nearby/nearby.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/nearby/nearby"],{"4e51":function(n,t,e){"use strict";var u=e("56de"),r=e.n(u);r.a},"56de":function(n,t,e){},"606d":function(n,t,e){"use strict";e.r(t);var u=e("ec2d"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a},"694f":function(n,t,e){"use strict";e.r(t);var u=e("9989"),r=e("606d");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("4e51");var a=e("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},9989:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},ec2d:function(n,t,e){}},[["50cb","common/runtime","common/vendor"]]]);
});
require('pages/nearby/nearby.js');
__wxRoute = 'pages/entertain/entertain';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertain.js';

define('pages/entertain/entertain.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertain"],{"1b01":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("c0ba"),i={data:function(){return{location:"",barInfo:"",itemStr:""}},methods:{getBarListData:function(){var t=this;(0,a.getBarList)(this.location).then(function(n){t.barInfo=n})},navigatorParam:function(n){this.itemStr=JSON.stringify(n),t.navigateTo({url:"entertainDetail?itemStr="+this.itemStr})}},onLoad:function(){var n=this;t.getLocation({geocode:!0,success:function(t){n.location=t.address.city,console.log("城市"+n.location," at pages/entertain/entertain.vue:52"),n.getBarListData()}})}};n.default=i}).call(this,e("6e42")["default"])},8603:function(t,n,e){"use strict";var a=e("c027"),i=e.n(a);i.a},c027:function(t,n,e){},cbb5:function(t,n,e){"use strict";e.r(n);var a=e("e2de"),i=e("ecba");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("8603");var r=e("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"4334cb5e",null);n["default"]=c.exports},e2de:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},ecba:function(t,n,e){"use strict";e.r(n);var a=e("1b01"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a}},[["3824","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertain.js');
__wxRoute = 'pages/entertain/entertainDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertainDetail.js';

define('pages/entertain/entertainDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertainDetail"],{"3e38":function(t,n,e){"use strict";e.r(n);var a=e("bf82"),u=e("a854");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("fcf6");var c=e("2877"),i=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,"1486b88d",null);n["default"]=i.exports},a854:function(t,n,e){"use strict";e.r(n);var a=e("e17c"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},bf82:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},e071:function(t,n,e){},e17c:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{barDetail:""}},methods:{openLocation:function(){t.getLocation({type:"gcj02",success:function(n){var e=n.latitude,a=n.longitude;t.openLocation({latitude:e,longitude:a,success:function(){console.log("success"," at pages/entertain/entertainDetail.vue:41")}})}})}},onLoad:function(t){this.barDetail=JSON.parse(t.itemStr)}};n.default=e}).call(this,e("6e42")["default"])},fcf6:function(t,n,e){"use strict";var a=e("e071"),u=e.n(a);u.a}},[["fddf","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertainDetail.js');
__wxRoute = 'pages/entertain/entertainApplication';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertainApplication.js';

define('pages/entertain/entertainApplication.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertainApplication"],{"36ae":function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return o})},"4b63":function(n,t,a){"use strict";a.r(t);var e=a("36ae"),o=a("a70f");for(var u in o)"default"!==u&&function(n){a.d(t,n,function(){return o[n]})}(u);a("fb3a");var r=a("2877"),i=Object(r["a"])(o["default"],e["a"],e["b"],!1,null,"160e5138",null);t["default"]=i.exports},a70f:function(n,t,a){"use strict";a.r(t);var e=a("ab4b"),o=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,function(){return e[n]})}(u);t["default"]=o.a},ab4b:function(n,t,a){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=a("c0ba"),o=a("4204"),u=function(){return a.e("components/m-input").then(a.bind(null,"8544"))},r={components:{mInput:u},data:function(){return{barInfo:{name:"",phone:"",location:"",intro:"",username:"",userphone:""},isUpload:!1,avatar:"../../static/img/user/upload.svg"}},methods:{upLogoImg:function(){var n=this;(0,e.getImgTemp)().then(function(t){n.avatar=t,(0,e.upLogo)(n.avatar,1).then(function(t){n.isUpload=!0})})},commitVer:function(){(0,o.barValidate)(this.barInfo,this.isUpload)&&(n.navigateTo({url:"entertainUpload"}),(0,e.setBar)(this.barInfo))}}};t.default=r}).call(this,a("6e42")["default"])},d1df:function(n,t,a){},fb3a:function(n,t,a){"use strict";var e=a("d1df"),o=a.n(e);o.a}},[["f50c","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertainApplication.js');
__wxRoute = 'pages/entertain/entertainUpload';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/entertain/entertainUpload.js';

define('pages/entertain/entertainUpload.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/entertain/entertainUpload"],{1300:function(t,n,a){},3693:function(t,n,a){"use strict";var i=a("1300"),e=a.n(i);e.a},7511:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a("c0ba"),e={data:function(){return{barImg:"../../static/img/main/entertain/en-upload.svg",licImg:"../../static/img/main/entertain/en-upload.svg"}},methods:{uploadImg:function(t){var n=this;(0,i.getImgTemp)().then(function(a){2==t&&(n.barImg=a),3==t&&(n.licImg=a)})}},onNavigationBarButtonTap:function(){"../../static/img/main/entertain/en-upload.svg"==this.barImg?t.showToast({icon:"none",title:"請上傳酒吧相冊圖片"}):"../../static/img/main/entertain/en-upload.svg"==this.licImg?t.showToast({icon:"none",title:"請上傳營業執照圖片"}):((0,i.upLogo)(this.barImg,2),(0,i.upLogo)(this.licImg,3))}};n.default=e}).call(this,a("6e42")["default"])},b455:function(t,n,a){"use strict";a.r(n);var i=a("7511"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);n["default"]=e.a},c2d1:function(t,n,a){"use strict";a.r(n);var i=a("f553"),e=a("b455");for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);a("3693");var u=a("2877"),c=Object(u["a"])(e["default"],i["a"],i["b"],!1,null,"3c3d355c",null);n["default"]=c.exports},f553:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})}},[["8034","common/runtime","common/vendor"]]]);
});
require('pages/entertain/entertainUpload.js');
__wxRoute = 'pages/user/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/user.js';

define('pages/user/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"2ea2":function(t,e,n){"use strict";n.r(e);var r=n("87ac"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=a.a},"87ac":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=n("c0ba");function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{userInfo:"",socialInfo:"",userId:t.getStorageSync("USERS_KEY").id,avatar:"../../static/img/user/upload.svg",settings:[{src:"../../static/img/user/relNameAuth.svg",url:"../auth/auth",label:"實名認證",expla:"PAN幣綫上交易所交易需要實名認證"},{src:"../../static/img/user/invCode.svg",url:"../invite/invite",label:"我的邀請碼",expla:"獲得PAN幣和原力"},{src:"../../static/img/user/assetLedger.svg",url:"../ledger/asset",label:"資產賬本",expla:""},{src:"../../static/img/user/focusLedger.svg",url:"../ledger/focus",label:"原力賬本",expla:""},{src:"../../static/img/user/plantBase.svg",url:"../base/base",label:"星球基地",expla:""},{src:"../../static/img/user/option.svg",url:"../setting/setting",label:"設置",expla:""}]}},computed:u({},(0,r.mapState)(["hasLogin","forcedLogin"])),methods:u({},(0,r.mapMutations)(["logout"]),{bindLogout:function(){var e=this;t.showModal({title:"確認退出",content:"確認退出",success:function(n){n.confirm&&(e.logout(),t.clearStorage("USERS_KEY"),t.reLaunch({url:"../login/login"}))}})},getUserInfo:function(){var t=this;(0,a.findByID)().then(function(e){t.userInfo=e,t.avatar=e.portrait,null!=t.userInfo.signature&&""!=t.userInfo.signature||(t.userInfo.signature="這家夥很懶，還沒有簽名")})},getSocialInfo:function(){var t=this;(0,a.getAllSocialInfo)().then(function(e){t.socialInfo=e})},uploadAvatar:function(){var t=this;(0,a.upPicture)(this.userId).then(function(e){t.avatar=e.id})}}),onShow:function(){this.getUserInfo(),this.getSocialInfo()}};e.default=i}).call(this,n("6e42")["default"])},9374:function(t,e,n){"use strict";var r=n("b89d"),a=n.n(r);a.a},a062:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},b89d:function(t,e,n){},fecd:function(t,e,n){"use strict";n.r(e);var r=n("a062"),a=n("2ea2");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("9374");var o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,"3e72527f",null);e["default"]=i.exports}},[["9f95","common/runtime","common/vendor"]]]);
});
require('pages/user/user.js');
__wxRoute = 'pages/user/update';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/update.js';

define('pages/user/update.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/update"],{"18f6":function(e,n,t){},2220:function(e,n,t){"use strict";t.r(n);var a=t("a1e3"),r=t("9474");for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);t("8868");var u=t("2877"),i=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},"6d64":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t("c0ba"),r=t("4204"),c=function(){return t.e("components/m-input").then(t.bind(null,"8544"))},u=function(){return t.e("components/logo").then(t.bind(null,"300a"))},i={components:{mInput:c,logo:u},data:function(){return{accArray:["1","0","0.5","其它"],accIndex:0,raceArray:["亚洲人","黑人","拉美人","中东人","混血","白人","其它"],raceIndex:0,userId:e.getStorageSync("USERS_KEY").id,userInfo:{age:"",name:"",signature:"",site:"",stature:"",weight:"",acctType:"",race:""},avatar:"../../static/img/user/upload.svg"}},methods:{bindAcc:function(e){this.accIndex=e.target.value},bindRace:function(e){this.raceIndex=e.target.value},uploadAvatar:function(){var e=this;(0,a.upPicture)(this.userId).then(function(n){e.avatar=n.id})},update:function(){(0,r.userValidate)(this.userInfo)&&(this.userInfo.acctType=this.accArray[this.accIndex],this.userInfo.race=this.raceArray[this.raceIndex],(0,a.upInfo)(this.userInfo,this.userId))},findInfo:function(){var e=this;(0,a.findByID)().then(function(n){e.userInfo=n,"亚洲人"==n.race&&(e.raceIndex=0),"黑人"==n.race&&(e.raceIndex=1),"拉美人"==n.race&&(e.raceIndex=2),"中东人"==n.race&&(e.raceIndex=3),"混血"==n.race&&(e.raceIndex=4),"白人"==n.race&&(e.raceIndex=5),"其它"==n.race&&(e.raceIndex=6),"1"==n.acctType&&(e.accIndex=0),"0"==n.acctType&&(e.accIndex=1),"0.5"==n.acctType&&(e.accIndex=2),"其它"==n.acctType&&(e.accIndex=3),null!=n.portrait&&""!=n.portrait&&(e.avatar=n.portrait),e.userInfo.age=""+n.age,e.userInfo.stature=""+n.stature,e.userInfo.weight=""+n.weight})}},onShow:function(){e.getStorageSync("USERS_KEY").token&&this.findInfo()}};n.default=i}).call(this,t("6e42")["default"])},8868:function(e,n,t){"use strict";var a=t("18f6"),r=t.n(a);r.a},9474:function(e,n,t){"use strict";t.r(n);var a=t("6d64"),r=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);n["default"]=r.a},a1e3:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r})}},[["5fd6","common/runtime","common/vendor"]]]);
});
require('pages/user/update.js');
__wxRoute = 'pages/msg/msg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/msg/msg.js';

define('pages/msg/msg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/msg"],{"0170":function(t,n,e){"use strict";var a=e("1a41"),o=e.n(a);o.a},"1a41":function(t,n,e){},"2afc":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"33a8":function(t,n,e){"use strict";e.r(n);var a=e("48ba"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a},"48ba":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"chat",data:function(){return{height:"603px",searchValue:"",headerTop:""}},components:{},onReady:function(){var n=this;t.getSystemInfo({success:function(t){console.log("res",t," at pages/msg/msg.vue:48"),n.height=t.screenHeight+"px",n.headerTop=t.windowTop+"px"}})},onNavigationBarButtonTap:function(n){t.showActionSheet({itemList:["忽略未读提醒","清空聊天列表","提醒设置"],success:function(n){console.log("选中了第"+n.tapIndex+"个按钮"," at pages/msg/msg.vue:58"),2==n.tapIndex&&t.navigateTo({url:"/pagesA/settingChat/settingChat"})},fail:function(t){console.log(t.errMsg," at pages/msg/msg.vue:66")}})},mounted:function(){},methods:{toChat:function(){t.navigateTo({url:"/pages/im-chat/im-chat"})}}};n.default=e}).call(this,e("6e42")["default"])},"9eeb":function(t,n,e){"use strict";e.r(n);var a=e("2afc"),o=e("33a8");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("0170");var s=e("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,"45204f26",null);n["default"]=c.exports}},[["3829","common/runtime","common/vendor"]]]);
});
require('pages/msg/msg.js');
__wxRoute = 'pages/pan/pan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pan/pan.js';

define('pages/pan/pan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pan/pan"],{"069e":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("c0ba"),a=function(){return e.e("components/m-icon/m-icon").then(e.bind(null,"0631"))},i={data:function(){return{propInfo:"",isHidden:this.$store.state.isHidden,changColor:"#EFEFF4",data1:"+0.91%",data2:"0.082",data3:"24H量 89，893，708",noBind:"暫未綁定",Bind:"已綁定",panVlaue:"198,878",donateValue:"10"}},components:{mIcon:a},methods:{assetHidden:function(){0==this.isHidden?(this.changColor="#9B9B9B",this.isHidden=!0,n.setStorageSync("ASSET_KEY",this.isHidden)):(this.changColor="#EFEFF4",this.isHidden=!1,n.setStorageSync("ASSET_KEY",this.isHidden))},getMyIndex:function(){var n=this;(0,o.getIndex)().then(function(t){n.propInfo=t})},add:function(){this.donateValue++},sub:function(){this.donateValue<=1?n.showToast({icon:"none",title:"不可以捐贈少於1個"}):this.donateValue--},donatePan:function(){var t=this;this.donateValue<=1?n.showToast({icon:"none",title:"不可以捐贈少於1個"}):(0,o.donate)(this.donateValue).then(function(n){t.getMyIndex()})}},onLoad:function(){this.getMyIndex()}};t.default=i}).call(this,e("6e42")["default"])},1082:function(n,t,e){"use strict";e.r(t);var o=e("a572"),a=e("22e8");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e("b9b3");var d=e("2877"),s=Object(d["a"])(a["default"],o["a"],o["b"],!1,null,"115c9ad8",null);t["default"]=s.exports},"22e8":function(n,t,e){"use strict";e.r(t);var o=e("069e"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=a.a},a572:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=(n._self._c,n._f("toFixed")(n.propInfo.balance,4)),o=n._f("toFixed")(n.propInfo.freeze,4),a=n._f("toFixed")(n.propInfo.usable,4);n.$mp.data=Object.assign({},{$root:{f0:e,f1:o,f2:a}})},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})},b9b3:function(n,t,e){"use strict";var o=e("ccbf"),a=e.n(o);a.a},ccbf:function(n,t,e){}},[["41a8","common/runtime","common/vendor"]]]);
});
require('pages/pan/pan.js');
__wxRoute = 'pages/pan/donateList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/pan/donateList.js';

define('pages/pan/donateList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pan/donateList"],{"0489":function(t,n,e){"use strict";e.r(n);var o=e("5362"),a=e("50b6");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("a617");var r=e("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,"572fee69",null);n["default"]=i.exports},"44c5":function(t,n,e){},"4fab":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("c0ba"),a={data:function(){return{donateList:"",textColor:["#4CD964","#4CD964","#4CD964"]}},methods:{getDonateList:function(){var t=this;(0,o.getPollTop)().then(function(n){t.donateList=n})}},onLoad:function(){this.getDonateList()}};n.default=a},"50b6":function(t,n,e){"use strict";e.r(n);var o=e("4fab"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},5362:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},a617:function(t,n,e){"use strict";var o=e("44c5"),a=e.n(o);a.a}},[["b71c","common/runtime","common/vendor"]]]);
});
require('pages/pan/donateList.js');
__wxRoute = 'pages/ledger/asset';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ledger/asset.js';

define('pages/ledger/asset.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ledger/asset"],{"0573":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a("c0ba"),i={data:function(){return{assetInfo:"",listInfo:"",labelList:"budget",budgetText:"black",taskText:"gray"}},methods:{getBalanceData:function(){var t=this;(0,n.getBalance)().then(function(e){t.assetInfo=e})},getBillData:function(){var t=this;(0,n.getBill)().then(function(e){t.listInfo="",t.listInfo=e})},getTaskData:function(){var t=this;(0,n.checkTaskList)().then(function(e){t.listInfo="",t.listInfo=e})},changeList:function(t){"budget"==t?(this.labelList="budget",this.budgetText="black",this.taskText="gray",this.getBillData()):(this.labelList="task",this.budgetText="gray",this.taskText="black",this.getTaskData())}},onLoad:function(){this.getBalanceData(),this.getBillData()}};e.default=i},1585:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t._f("toFixed")(t.assetInfo.balance,4)),n=t._f("toFixed")(t.assetInfo.freeze,4);t.$mp.data=Object.assign({},{$root:{f0:a,f1:n}})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"33d1":function(t,e,a){"use strict";var n=a("9d02"),i=a.n(n);i.a},"4c07":function(t,e,a){"use strict";a.r(e);var n=a("1585"),i=a("c025");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("33d1");var o=a("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"9e8b2028",null);e["default"]=u.exports},"9d02":function(t,e,a){},c025:function(t,e,a){"use strict";a.r(e);var n=a("0573"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a}},[["298b","common/runtime","common/vendor"]]]);
});
require('pages/ledger/asset.js');
__wxRoute = 'pages/ledger/focus';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/ledger/focus.js';

define('pages/ledger/focus.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ledger/focus"],{1210:function(t,a,n){"use strict";n.r(a);var e=n("d9a2"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);a["default"]=i.a},"89f1":function(t,a,n){},aaf4:function(t,a,n){"use strict";n.r(a);var e=n("c7d3"),i=n("1210");for(var s in i)"default"!==s&&function(t){n.d(a,t,function(){return i[t]})}(s);n("b886");var o=n("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,"413f6d9b",null);a["default"]=u.exports},b886:function(t,a,n){"use strict";var e=n("89f1"),i=n.n(e);i.a},c7d3:function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=(t._self._c,t._f("toFixed")(t.assetInfo.balance,4)),e=t._f("toFixed")(t.assetInfo.notFree,4);t.$mp.data=Object.assign({},{$root:{f0:n,f1:e}})},i=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return i})},d9a2:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n("c0ba"),i={data:function(){return{assetInfo:"",listInfo:"",labelList:"budget",budgetText:"black",taskText:"gray"}},methods:{getBalanceData:function(){var t=this;(0,e.getForBalance)().then(function(a){t.assetInfo=a})},getBillData:function(){var t=this;(0,e.getForBill)().then(function(a){t.listInfo="",t.listInfo=a})},getTaskData:function(){var t=this;(0,e.checkForTaskList)().then(function(a){t.listInfo="",t.listInfo=a})},changeList:function(t){"budget"==t?(this.labelList="budget",this.budgetText="black",this.taskText="gray",this.getBillData()):(this.labelList="task",this.budgetText="gray",this.taskText="black",this.getTaskData())}},onLoad:function(){this.getBalanceData(),this.getBillData()}};a.default=i}},[["e64d","common/runtime","common/vendor"]]]);
});
require('pages/ledger/focus.js');
__wxRoute = 'pages/purse/purse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/purse/purse.js';

define('pages/purse/purse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/purse/purse"],{1461:function(t,n,a){"use strict";a.r(n);var e=a("7278"),o=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=o.a},5429:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=(t._self._c,t._f("toFixed")(t.assetInfo.balance,4));t.$mp.data=Object.assign({},{$root:{f0:a}})},o=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o})},7278:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a("c0ba"),o={data:function(){return{assetInfo:"",listInfo:""}},methods:{getBalanceData:function(){var t=this;(0,e.getBalance)().then(function(n){t.assetInfo=n})},getBillData:function(){var t=this;(0,e.getBill)().then(function(n){t.listInfo=n})}},onLoad:function(){this.getBalanceData(),this.getBillData()}};n.default=o},"762c":function(t,n,a){"use strict";a.r(n);var e=a("5429"),o=a("1461");for(var c in o)"default"!==c&&function(t){a.d(n,t,function(){return o[t]})}(c);a("c085");var u=a("2877"),i=Object(u["a"])(o["default"],e["a"],e["b"],!1,null,"59408810",null);n["default"]=i.exports},c085:function(t,n,a){"use strict";var e=a("c0b4"),o=a.n(e);o.a},c0b4:function(t,n,a){}},[["d9c5","common/runtime","common/vendor"]]]);
});
require('pages/purse/purse.js');
__wxRoute = 'pages/passport/passport';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/passport/passport.js';

define('pages/passport/passport.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/passport/passport"],{4295:function(n,t,f){},"8ffa":function(n,t,f){"use strict";var u=f("4295"),c=f.n(u);c.a},acee:function(n,t,f){"use strict";f.r(t);var u=f("c803"),c=f("ff4c");for(var r in c)"default"!==r&&function(n){f.d(t,n,function(){return c[n]})}(r);f("8ffa");var a=f("2877"),e=Object(a["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=e.exports},bfde:function(n,t,f){},c803:function(n,t,f){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},c=[];f.d(t,"a",function(){return u}),f.d(t,"b",function(){return c})},ff4c:function(n,t,f){"use strict";f.r(t);var u=f("bfde"),c=f.n(u);for(var r in u)"default"!==r&&function(n){f.d(t,n,function(){return u[n]})}(r);t["default"]=c.a}},[["015c","common/runtime","common/vendor"]]]);
});
require('pages/passport/passport.js');
__wxRoute = 'pages/auth/auth';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/auth/auth.js';

define('pages/auth/auth.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auth/auth"],{"40b7":function(n,t,u){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},r=[];u.d(t,"a",function(){return e}),u.d(t,"b",function(){return r})},"6fe1":function(n,t,u){},7236:function(n,t,u){"use strict";var e=u("6fe1"),r=u.n(e);r.a},"905e":function(n,t,u){"use strict";u.r(t);var e=u("40b7"),r=u("e2b0");for(var a in r)"default"!==a&&function(n){u.d(t,n,function(){return r[n]})}(a);u("7236");var f=u("2877"),o=Object(f["a"])(r["default"],e["a"],e["b"],!1,null,null,null);t["default"]=o.exports},b0ef:function(n,t,u){},e2b0:function(n,t,u){"use strict";u.r(t);var e=u("b0ef"),r=u.n(e);for(var a in e)"default"!==a&&function(n){u.d(t,n,function(){return e[n]})}(a);t["default"]=r.a}},[["4620","common/runtime","common/vendor"]]]);
});
require('pages/auth/auth.js');
__wxRoute = 'pages/invite/invite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/invite/invite.js';

define('pages/invite/invite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invite/invite"],{"14e7":function(t,e,n){"use strict";n.r(e);var o=n("83b8"),i=n("6005");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("b441");var r=n("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"4d214951",null);e["default"]=u.exports},"4e2f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("c0ba"),i=n("fc20"),a=u(n("b337")),r=n("52d4");function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/wm-poster/wm-poster")]).then(n.bind(null,"58aa"))},s={data:function(){return{assetInfo:"",listInfo:"",inviteCode:"",created:!1,createImg:""}},components:{wmPoster:c},methods:{getInvData:function(){var t=this;(0,i.invList)().then(function(e){t.listInfo=e}),(0,o.getInvCode)().then(function(e){t.inviteCode=e})},createPoster:function(){var t=this,e="http://pandla.io?invCode="+this.inviteCode,n=a.default.createQrCodeImg(e,{size:parseInt(300)});(0,r.base64ToPath)(n).then(function(e){console.log(e," at pages/invite/invite.vue:76"),t.createImg=e}).catch(function(t){console.error(t," at pages/invite/invite.vue:79")}),this.created=!0}},onLoad:function(){this.getInvData()}};e.default=s},6005:function(t,e,n){"use strict";n.r(e);var o=n("4e2f"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},6500:function(t,e,n){},"83b8":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},b441:function(t,e,n){"use strict";var o=n("6500"),i=n.n(o);i.a}},[["eb92","common/runtime","common/vendor"]]]);
});
require('pages/invite/invite.js');
__wxRoute = 'pages/base/base';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/base/base.js';

define('pages/base/base.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/base/base"],{"0902":function(n,t,u){},"24ec":function(n,t,u){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},c=[];u.d(t,"a",function(){return e}),u.d(t,"b",function(){return c})},"2c9c":function(n,t,u){"use strict";u.r(t);var e=u("24ec"),c=u("f60f");for(var r in c)"default"!==r&&function(n){u.d(t,n,function(){return c[n]})}(r);u("35bf");var f=u("2877"),a=Object(f["a"])(c["default"],e["a"],e["b"],!1,null,null,null);t["default"]=a.exports},"35bf":function(n,t,u){"use strict";var e=u("0902"),c=u.n(e);c.a},"776d":function(n,t,u){},f60f:function(n,t,u){"use strict";u.r(t);var e=u("776d"),c=u.n(e);for(var r in e)"default"!==r&&function(n){u.d(t,n,function(){return e[n]})}(r);t["default"]=c.a}},[["7868","common/runtime","common/vendor"]]]);
});
require('pages/base/base.js');
__wxRoute = 'pages/strategy/strategy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/strategy/strategy.js';

define('pages/strategy/strategy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/strategy/strategy"],{"335c":function(n,t,a){},"42f7":function(n,t,a){"use strict";a.r(t);var u=a("f659"),r=a.n(u);for(var e in u)"default"!==e&&function(n){a.d(t,n,function(){return u[n]})}(e);t["default"]=r.a},"4f99":function(n,t,a){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];a.d(t,"a",function(){return u}),a.d(t,"b",function(){return r})},a9da:function(n,t,a){"use strict";var u=a("335c"),r=a.n(u);r.a},e2b06:function(n,t,a){"use strict";a.r(t);var u=a("4f99"),r=a("42f7");for(var e in r)"default"!==e&&function(n){a.d(t,n,function(){return r[n]})}(e);a("a9da");var f=a("2877"),c=Object(f["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},f659:function(n,t,a){}},[["b7a1","common/runtime","common/vendor"]]]);
});
require('pages/strategy/strategy.js');
__wxRoute = 'pages/welfare/welfare';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/welfare/welfare.js';

define('pages/welfare/welfare.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/welfare/welfare"],{1236:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"41e1":function(t,n,a){},"6c4d":function(t,n,a){"use strict";a.r(n);var e=a("b0db"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,function(){return e[t]})}(r);n["default"]=i.a},"803f":function(t,n,a){"use strict";a.r(n);var e=a("1236"),i=a("6c4d");for(var r in i)"default"!==r&&function(t){a.d(n,t,function(){return i[t]})}(r);a("9286");var o=a("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,"40a6c5db",null);n["default"]=u.exports},9286:function(t,n,a){"use strict";var e=a("41e1"),i=a.n(e);i.a},b0db:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a("c0ba"),i={data:function(){return{location:"",barInfo:"",itemStr:""}},methods:{getBarListData:function(){var t=this;(0,e.getBarList)(this.location).then(function(n){t.barInfo=n})},navigatorParam:function(n){this.itemStr=JSON.stringify(n),t.navigateTo({url:"entertainDetail?itemStr="+this.itemStr})}},onLoad:function(){this.getBarListData()}};n.default=i}).call(this,a("6e42")["default"])}},[["9c3c","common/runtime","common/vendor"]]]);
});
require('pages/welfare/welfare.js');
__wxRoute = 'pages/setting/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setting/setting.js';

define('pages/setting/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setting/setting"],{"15e9":function(e,t,n){"use strict";n.r(t);var a=n("9e49"),r=n("373c");for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);n("c5b6");var u=n("2877"),c=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,"6161dc92",null);t["default"]=c.exports},"1ee5":function(e,t,n){},"373c":function(e,t,n){"use strict";n.r(t);var a=n("e91b"),r=n.n(a);for(var l in a)"default"!==l&&function(e){n.d(t,e,function(){return a[e]})}(l);t["default"]=r.a},"9e49":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},c5b6:function(e,t,n){"use strict";var a=n("1ee5"),r=n.n(a);r.a},e91b:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{settings:[{label:"關於PANDLA"},{label:"版本更新"},{label:"清除緩存"},{label:"服務條款"},{label:"隱私政策"},{label:"全球招募超級節點",specColor:"-webkit-linear-gradient(left, #033A3A, #032F06)"},{label:"聯係我們",specColor:"-webkit-linear-gradient(left, #033A3A, #032F06)"}]}}};t.default=a}},[["109d","common/runtime","common/vendor"]]]);
});
require('pages/setting/setting.js');
__wxRoute = 'pagesA/settingChat/settingChat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pagesA/settingChat/settingChat.js';

define('pagesA/settingChat/settingChat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pagesA/settingChat/settingChat"],{"5b24":function(t,e,n){"use strict";n.r(e);var a=n("7326"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},7326:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"settingChat",data:function(){return{height:"603px"}},onReady:function(){var e=this;t.getSystemInfo({success:function(t){e.height=t.screenHeight+"px"}})},methods:{switch1Change:function(t){console.log("search",t," at pagesA/settingChat/settingChat.vue:52")},switch2Change:function(t){console.log("search",t," at pagesA/settingChat/settingChat.vue:56")}}};e.default=n}).call(this,n("6e42")["default"])},aad4:function(t,e,n){"use strict";var a=n("af34"),u=n.n(a);u.a},af34:function(t,e,n){},d511:function(t,e,n){"use strict";n.r(e);var a=n("ee5e"),u=n("5b24");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("aad4");var c=n("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,"fd76799c",null);e["default"]=o.exports},ee5e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}},[["169e","common/runtime","common/vendor"]]]);
});
require('pagesA/settingChat/settingChat.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

